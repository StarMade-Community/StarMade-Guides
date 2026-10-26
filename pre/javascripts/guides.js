// Web versions of the in-game guide fences: ```svg is drawn inline, ```scene as a 3D block viewer.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js/+esm';

const AUTO_STEP_MS = 3000;
// Colour by block key; anything unlisted gets a stable colour from its name.
const COLOURS = [
	[/STABILIZER/, 0xe09a3e], [/REACTOR_POWER/, 0x4f8fd0], [/CONDUIT/, 0x3f8c9a],
	[/CHAMBER/, 0x9b6fd6], [/SHIP_CORE/, 0x8a9099], [/GREY|GRAY/, 0x80858c],
];

function colour(key) {
	for (const [re, c] of COLOURS) if (re.test(key)) return c;
	let h = 0;
	for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) | 0;
	return new THREE.Color().setHSL((h >>> 0) % 360 / 360, 0.45, 0.55).getHex();
}

// Block face textures exported from the game by StarMade-Master's scripts/export_guide_textures.py
const BLOCKS_DIR = new URL('../assets/blocks/', import.meta.url);
const { blocks: blockTextures = {}, names: blockNames = {}, texOrder: TEX_ORDER, orient: ORIENT_BASES } = await fetch(new URL('blocks.json', BLOCKS_DIR)).then(r => r.json()).catch(() => ({}));
// The outer 20/256 of each tile is a wrap margin the game never shows
const TILE_INSET = 20 / 256;
const sheets = new Map();
const tileMaterials = new Map();
const geometries = new Map();

function sheet(n) {
	if (!sheets.has(n)) sheets.set(n, new Promise((ok, fail) => {
		const img = new Image();
		img.onload = () => ok(img);
		img.onerror = fail;
		img.src = new URL(`t${String(n).padStart(3, '0')}.png`, BLOCKS_DIR);
	}));
	return sheets.get(n);
}

// One material per texture tile, grey until its sheet loads; a sheet is 16x16 tiles
function tileMaterial(id) {
	if (!tileMaterials.has(id)) {
		const m = new THREE.MeshLambertMaterial({ color: 0x808080, transparent: true, alphaTest: 0.05 });
		sheet(id >> 8).then(img => {
			const size = img.width / 16, inset = size * TILE_INSET, tile = id & 255;
			const c = Object.assign(document.createElement('canvas'), { width: size, height: size });
			c.getContext('2d').drawImage(img, (tile % 16) * size + inset, (tile >> 4) * size + inset, size - 2 * inset, size - 2 * inset, 0, 0, size, size);
			m.map = new THREE.CanvasTexture(c);
			m.map.colorSpace = THREE.SRGBColorSpace;
			m.color.set(0xffffff);
			m.needsUpdate = true;
		}).catch(() => {});
		tileMaterials.set(id, m);
	}
	return tileMaterials.get(id);
}

// The game's sides, in order: front, back, top, bottom, right, left
const NORMALS = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
// Which of a block's six textures each side shows for an orientation (CubeMeshBufferContainer)
const ORIENT_6 = [[5, 4, 3, 2, 0, 1], [4, 5, 3, 2, 1, 0], [1, 0, 5, 4, 2, 3], [0, 1, 4, 5, 3, 2], [1, 0, 3, 2, 4, 5], [0, 1, 3, 2, 5, 4]];
const ORIENT_24 = [[5, 4, 2, 3, 0, 1], [4, 5, 2, 3, 1, 0], [0, 1, 4, 5, 3, 2], [1, 0, 5, 4, 2, 3], [1, 0, 3, 2, 4, 5], [0, 1, 2, 3, 5, 4]];
const THREE_SIDED = [0, 0, 3, 2, 0, 0];
// Where each face's 4 corners sit (BlockShapeAlgorithm.vertexOrderMap, CubeMeshQuadsShader13.quadPosMark)
const VERTEX_ORDER = [[3, 1, 0, 2], [2, 0, 1, 3], [1, 0, 2, 3], [3, 2, 0, 1], [2, 0, 1, 3], [3, 1, 0, 2]];
const QUAD_POS_MARK = [[2, 4, 0], [2, 4, 0], [4, 0, 2], [4, 0, 2], [0, 4, 2], [0, 4, 2]];

function faceTexture(e, side, orient) {
	const t = e.t;
	if (typeof t === 'number') return t;
	const o = Math.max(0, Math.min(5, e.m === 24 ? orient >> 2 : orient));
	const mapping = e.m === 24 ? ORIENT_24[o] : e.m === 6 ? ORIENT_6[o] : e.m === 3 ? THREE_SIDED : null;
	return t[mapping ? 5 - mapping[side] : 0];
}

// Tile corner order per side for each of the 24 Oriencube orientations: extOrderPerm[vertexInfo.properties]
const ORIENT_24_TEX = [[[1,3,2,0],[2,0,1,3],[1,3,2,0],[2,0,1,3],[0,1,3,2],[0,1,3,2]],[[0,1,3,2],[0,1,3,2],[1,3,2,0],[2,0,1,3],[0,1,3,2],[0,1,3,2]],[[2,0,1,3],[1,3,2,0],[1,3,2,0],[2,0,1,3],[0,1,3,2],[0,1,3,2]],[[3,2,0,1],[3,2,0,1],[1,3,2,0],[2,0,1,3],[0,1,3,2],[0,1,3,2]],
	[[3,1,0,2],[2,0,1,3],[2,0,1,3],[1,3,2,0],[3,2,0,1],[3,2,0,1]],[[0,1,3,2],[0,1,3,2],[2,0,1,3],[1,3,2,0],[3,2,0,1],[3,2,0,1]],[[2,0,1,3],[1,3,2,0],[2,0,1,3],[1,3,2,0],[3,2,0,1],[3,2,0,1]],[[3,2,0,1],[3,2,0,1],[2,0,1,3],[1,3,2,0],[3,2,0,1],[3,2,0,1]],
	[[1,3,2,0],[2,0,1,3],[2,0,1,3],[1,3,2,0],[2,0,1,3],[1,3,2,0]],[[1,3,2,0],[2,0,1,3],[0,1,3,2],[0,1,3,2],[2,0,1,3],[1,3,2,0]],[[1,3,2,0],[2,0,1,3],[1,3,2,0],[2,0,1,3],[2,0,1,3],[1,3,2,0]],[[1,3,2,0],[2,0,1,3],[3,2,0,1],[3,2,0,1],[2,0,1,3],[1,3,2,0]],
	[[2,0,1,3],[1,3,2,0],[2,0,1,3],[1,3,2,0],[1,3,2,0],[2,0,1,3]],[[2,0,1,3],[1,3,2,0],[0,1,3,2],[0,1,3,2],[1,3,2,0],[2,0,1,3]],[[2,0,1,3],[1,3,2,0],[1,3,2,0],[2,0,1,3],[1,3,2,0],[2,0,1,3]],[[2,0,1,3],[1,3,2,0],[3,2,0,1],[3,2,0,1],[1,3,2,0],[2,0,1,3]],
	[[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1],[0,1,3,2],[0,1,3,2]],[[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1],[1,3,2,0],[2,0,1,3]],[[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1]],[[3,2,0,1],[3,2,0,1],[3,2,0,1],[3,2,0,1],[2,0,1,3],[1,3,2,0]],
	[[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2]],[[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2],[1,3,2,0],[2,0,1,3]],[[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2],[3,2,0,1],[3,2,0,1]],[[0,1,3,2],[0,1,3,2],[0,1,3,2],[0,1,3,2],[2,0,1,3],[1,3,2,0]]];

// Which tile corner each face corner gets, as ConnectedTextureUtils.texOrder picks it
function texOrder(e, orient) {
	if (e.m === 24) return ORIENT_24_TEX[orient % 24];
	if (!TEX_ORDER) return null;
	if (e.m === 3) return TEX_ORDER.normal[0];
	const o = e.s ? 0 : e.m === 6 ? Math.max(0, Math.min(5, orient)) : orient;
	return (e.p ? TEX_ORDER.orient : TEX_ORDER.normal)[o % 6];
}

// A unit cube built the way cube-3rd.vsh places it: corner i of a face sits at vertexOrderMap/quadPosMark
// and shows tile corner order[side][i] (u = bit 1, v = bit 0, v down the image)
function cubeGeometry(order) {
	const id = JSON.stringify(order);
	if (geometries.has(id)) return geometries.get(id);
	const pos = [], uv = [], index = [];
	const g = new THREE.BufferGeometry();
	for (let side = 0; side < 6; side++) {
		const base = pos.length / 3, q = QUAD_POS_MARK[side], n = NORMALS[side];
		for (let i = 0; i < 4; i++) {
			const v = VERTEX_ORDER[side][i];
			pos.push(...[0, 1, 2].map(k => q[k] ? ((v * q[k] >> 2) & 1) - 0.5 : n[k] * 0.5));
			const t = order ? order[side][i] : [0, 1, 3, 2][i];
			uv.push((t >> 1) & 1, 1 - (t & 1));
		}
		const c = [0, 1, 2].map(i => new THREE.Vector3().fromArray(pos, (base + i) * 3));
		const outward = c[1].clone().sub(c[0]).cross(c[2].clone().sub(c[0])).dot(new THREE.Vector3(...n)) > 0;
		index.push(...(outward ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2]).map(i => base + i));
		g.addGroup(side * 6, 6, side);
	}
	g.setIndex(index);
	g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
	g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
	g.computeVertexNormals();
	geometries.set(id, g);
	return g;
}

function blockEntry(key) {
	const raw = blockTextures[key];
	return raw === undefined || (typeof raw === 'object' && !Array.isArray(raw)) ? raw : { t: raw };
}

// A LodShape's model from models/<shape>.json, null if it won't load; its texture fills in later
const models = new Map();
function lodModel(shape) {
	if (!models.has(shape)) models.set(shape, fetch(new URL(`models/${shape}.json`, BLOCKS_DIR)).then(r => r.json()).then(d => {
		const geometry = new THREE.BufferGeometry();
		geometry.setIndex(d.i);
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(d.p, 3));
		geometry.setAttribute('normal', new THREE.Float32BufferAttribute(d.n, 3));
		geometry.setAttribute('uv', new THREE.Float32BufferAttribute(d.uv, 2));
		const material = new THREE.MeshLambertMaterial({ color: 0x808080 });
		new THREE.TextureLoader().load(new URL(`models/${d.tex}`, BLOCKS_DIR).href, map => {
			map.flipY = false; // Ogre UVs run v down the image
			map.colorSpace = THREE.SRGBColorSpace;
			Object.assign(material, { map, needsUpdate: true }).color.set(0xffffff);
		});
		return models.set(shape, { geometry, material, pos: d.pos, rot: d.rot }).get(shape);
	}).catch(() => models.set(shape, null).get(shape)));
	return models.get(shape);
}

// Model placement relative to the block centre, as BatchBlockDrawer.drawLodBlock does it: orientation
// basis * the .scene node rotation, offset by the .scene position turned by the orientation basis
function lodMatrix(model, e, orient) {
	const b = ORIENT_BASES[Math.min(e.s === 3 ? (orient % 6) * 4 : orient, ORIENT_BASES.length - 1)];
	const basis = new THREE.Matrix4().set(b[0], b[1], b[2], 0, b[3], b[4], b[5], 0, b[6], b[7], b[8], 0, 0, 0, 0, 1);
	const offset = new THREE.Vector3(...model.pos).applyMatrix4(basis);
	return basis.multiply(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(...model.rot))).setPosition(offset);
}

// Textured, oriented cube or LOD model for a game block; mod blocks and anything unexported are a flat colour.
// LOD models must have been awaited with lodModel first.
function blockLook(key, orient) {
	const e = blockEntry(key);
	if (e === undefined) return { geometry: cubeGeometry(null), material: new THREE.MeshLambertMaterial({ color: colour(key) }) };
	const model = e.l && ORIENT_BASES && models.get(e.l);
	if (model && !(model instanceof Promise)) return { geometry: model.geometry, material: model.material, matrix: lodMatrix(model, e, orient) };
	return { geometry: cubeGeometry(texOrder(e, orient)), material: [0, 1, 2, 3, 4, 5].map(side => tileMaterial(faceTexture(e, side, orient))) };
}

function label(key) {
	if (blockNames[key]) return blockNames[key];
	const name = key.includes('~') ? key.split('~')[1] : key.replace(/_/g, ' ').toLowerCase();
	return name.replace(/\b\w/g, c => c.toUpperCase());
}

// Same placement format as the game: {"at":[x,y,z]} or {"from":[..],"to":[..]}, plus "block".
function place(entries, into) {
	for (const e of entries || []) {
		const a = e.at || e.from, b = e.at || e.to;
		for (let x = Math.min(a[0], b[0]); x <= Math.max(a[0], b[0]); x++)
			for (let y = Math.min(a[1], b[1]); y <= Math.max(a[1], b[1]); y++)
				for (let z = Math.min(a[2], b[2]); z <= Math.max(a[2], b[2]); z++)
					into.set(`${x},${y},${z}`, { key: e.block, orient: e.orient || 0, controller: e.controller?.join(',') });
	}
}

async function scene(pre, json) {
	const steps = json.steps || [];
	// Each step adds to the ones before, replacing blocks at the same position
	const states = [];
	const acc = new Map();
	place(json.blocks, acc);
	if (!steps.length) states.push(new Map(acc));
	for (const s of steps) { place(s.blocks, acc); states.push(new Map(acc)); }
	const shapes = new Set(states.flatMap(s => [...s.values()].map(b => blockEntry(b.key)?.l).filter(Boolean)));
	await Promise.all([...shapes].map(lodModel));

	const box = document.createElement('div');
	box.className = 'guide-scene';
	box.style.position = 'relative';
	const canvas = document.createElement('canvas');
	canvas.style.cssText = `width:100%;height:${json.height || 220}px;display:block;background:#0d121c;border-radius:6px`;
	box.append(canvas);
	pre.replaceWith(box);

	const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
	renderer.setClearColor(0x0d121c);
	const world = new THREE.Scene();
	const sun = new THREE.DirectionalLight(0xffffff, 1.5);
	sun.position.set(3, 5, 2);
	world.add(new THREE.AmbientLight(0xffffff, 2.2), sun);
	const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
	const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 });
	const materials = new Map();
	const group = new THREE.Group();
	world.add(group);

	// Frame every step's blocks, so the camera doesn't jump between steps
	const bounds = new THREE.Box3();
	for (const pos of acc.keys()) bounds.expandByPoint(new THREE.Vector3(...pos.split(',').map(Number)));
	bounds.expandByScalar(0.5);
	const centre = bounds.getCenter(new THREE.Vector3());
	const radius = bounds.getSize(new THREE.Vector3()).length() / 2;
	const camera = new THREE.PerspectiveCamera(40, 1, 0.1, radius * 20);
	camera.position.copy(centre).add(new THREE.Vector3(1, 0.8, 1.3).normalize().multiplyScalar(radius * 2.4));
	const controls = new OrbitControls(camera, canvas);
	controls.target.copy(centre);

	let step = 0, auto = steps.length > 1, selected = null;
	function show(i) {
		step = (i + states.length) % states.length;
		group.clear();
		for (const [pos, { key, orient }] of states[step]) {
			const id = `${key}@${orient}`;
			if (!materials.has(id)) materials.set(id, blockLook(key, orient));
			const look = materials.get(id);
			const m = new THREE.Mesh(look.geometry, look.material);
			m.position.set(...pos.split(',').map(Number));
			if (look.matrix) {
				m.matrixAutoUpdate = false;
				m.matrix.copy(look.matrix).premultiply(new THREE.Matrix4().makeTranslation(m.position));
			}
			m.userData = { name: label(key), pos };
			if (!Array.isArray(m.material) && !look.matrix) m.add(new THREE.LineSegments(edges, edgeMaterial));
			group.add(m);
		}
		if (!states[step].has(selected)) selected = null;
		showLinks();
		if (steps.length) { counter.textContent = `Step ${step + 1} / ${steps.length}`; caption.textContent = steps[step].text || ''; }
	}

	let counter, caption;
	if (steps.length) {
		const row = document.createElement('div');
		row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-top:6px';
		const button = (text, d) => Object.assign(document.createElement('button'), { textContent: text, onclick: () => { auto = false; show(step + d); } });
		counter = document.createElement('span');
		caption = document.createElement('p');
		row.append(button('<', -1), counter, button('>', 1));
		box.append(row, caption);
	}

	// Like the in-game scene: hover names the block, clicking one shows its C/V links the way build
	// mode does, an amber box on it and pulsing purple on every block it controls
	const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
	function pick(e) {
		const r = canvas.getBoundingClientRect();
		mouse.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
		ray.setFromCamera(mouse, camera);
		return ray.intersectObjects(group.children, false)[0]?.object.userData;
	}
	const controlsAny = pos => [...states[step].values()].some(b => b.controller === pos);

	const tip = document.createElement('div');
	tip.style.cssText = 'position:absolute;pointer-events:none;display:none;white-space:pre;padding:3px 7px;border-radius:4px;background:rgba(10,14,22,0.92);color:#e6edf5;font-size:13px;border:1px solid #2c3b50';
	box.append(tip);
	let downAt = null;
	canvas.addEventListener('pointermove', e => {
		const hit = downAt ? null : pick(e);
		tip.style.display = hit ? 'block' : 'none';
		if (!hit) return;
		tip.textContent = controlsAny(hit.pos) ? `${hit.name}
Click to see Connections` : hit.name;
		tip.style.left = `${e.offsetX + 14}px`;
		tip.style.top = `${e.offsetY + 14}px`;
	});
	canvas.addEventListener('pointerleave', () => tip.style.display = 'none');
	canvas.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; tip.style.display = 'none'; });
	canvas.addEventListener('pointerup', e => {
		// A click, not the end of a drag to rotate
		if (downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) < 5) {
			selected = pick(e)?.pos ?? null;
			showLinks();
		}
		downAt = null;
	});

	// Drawn through the blocks: a link is often to something behind or under the selection
	const linkBox = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.04, 1.04, 1.04));
	const selectedMaterial = new THREE.LineBasicMaterial({ color: 0xffb31a, transparent: true, opacity: 0.8, depthTest: false });
	const linkedMaterial = new THREE.LineBasicMaterial({ transparent: true, depthTest: false });
	const links = new THREE.Group();
	links.renderOrder = 1;
	world.add(links);
	function showLinks() {
		links.clear();
		if (selected === null) return;
		const at = (pos, material) => {
			const l = new THREE.LineSegments(linkBox, material);
			l.position.set(...pos.split(',').map(Number));
			l.renderOrder = 1;
			links.add(l);
		};
		at(selected, selectedMaterial);
		for (const [pos, b] of states[step]) if (b.controller === selected) at(pos, linkedMaterial);
	}

	show(0);
	if (auto) {
		const timer = setInterval(() => auto ? show(step + 1) : clearInterval(timer), AUTO_STEP_MS);
		for (const type of ['pointerdown', 'wheel']) canvas.addEventListener(type, () => auto = false);
	}

	renderer.setAnimationLoop(() => {
		const w = canvas.clientWidth, h = canvas.clientHeight;
		if (canvas.width !== w * devicePixelRatio || canvas.height !== h * devicePixelRatio) {
			renderer.setPixelRatio(devicePixelRatio);
			renderer.setSize(w, h, false);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
		}
		const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 1000 * 4);
		linkedMaterial.color.setRGB(0.4 + 0.3 * pulse, 0.1 + 0.3 * pulse, 0.9);
		linkedMaterial.opacity = 0.65 + 0.3 * pulse;
		controls.update();
		renderer.render(world, camera);
	});
}

// ![block:Name] or ![block:ID] is an in-game block icon; the web shows the block's name instead
const walker = document.createTreeWalker(document.querySelector('[role=main]') || document.body, NodeFilter.SHOW_TEXT,
	{ acceptNode: n => n.parentElement.closest('pre, code') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
const iconTexts = [];
while (walker.nextNode()) if (/!\[block:[^\]]+\]/i.test(walker.currentNode.nodeValue)) iconTexts.push(walker.currentNode);
for (const node of iconTexts) {
	const span = document.createElement('span');
	for (const part of node.nodeValue.split(/(!\[block:[^\]]+\])/i)) {
		const ref = /^!\[block:([^\]]+)\]$/i.exec(part)?.[1].trim();
		if (!ref) { span.append(part); continue; }
		const chip = Object.assign(document.createElement('span'), { textContent: /^\d+$/.test(ref) ? `Block #${ref}` : ref });
		chip.style.cssText = 'display:inline-block;padding:0 6px;border-radius:4px;background:#1b232f;color:#cfe0f5;font-size:90%;white-space:nowrap';
		span.append(chip);
	}
	node.replaceWith(span);
}

for (const code of document.querySelectorAll('pre > code.language-svg')) {
	const div = document.createElement('div');
	div.innerHTML = code.textContent;
	div.querySelector('svg')?.style.setProperty('max-width', '100%');
	div.querySelector('svg')?.style.setProperty('height', 'auto');
	code.parentElement.replaceWith(div);
}
for (const code of document.querySelectorAll('pre > code.language-scene')) {
	// On failure the source is left showing
	try {
		scene(code.parentElement, JSON.parse(code.textContent)).catch(e => console.error('guide scene failed', e));
	} catch (e) {
		console.error('guide scene failed', e);
	}
}

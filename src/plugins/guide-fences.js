// Turns the in-game guide syntax into web HTML at build time: ```svg is drawn inline, ```scene becomes a
// placeholder src/scene-viewer.js fills, ![block:Name] / ![block:ID] icons become name chips,
// ![alt](img){align=right} floats the image and a "/// caption ... ///" paragraph is styled as a caption.
const escape = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function chips(text) {
	return text.split(/(!\[block:[^\]]+\])/i).filter(Boolean).map(part => {
		const ref = /^!\[block:([^\]]+)\]$/i.exec(part)?.[1].trim();
		if (!ref) return { type: 'text', value: part };
		return { type: 'html', value: `<span class="guide-block">${escape(/^\d+$/.test(ref) ? `Block #${ref}` : ref)}</span>` };
	});
}

function fence(node) {
	if (node.lang === 'svg') return { type: 'html', value: `<div class="guide-svg">${node.value}</div>` };
	if (node.lang !== 'scene') return node;
	try {
		JSON.parse(node.value);
	} catch {
		return node; // broken JSON stays visible as source, like the old viewer
	}
	return { type: 'html', value: `<div class="guide-scene" data-scene="${escape(node.value)}"></div>` };
}

const addClass = (node, name) => ((node.data ??= {}).hProperties ??= {}).className = name;

function caption(p) {
	const first = p.children[0], last = p.children.at(-1);
	if (first?.type !== 'text' || last?.type !== 'text' || !/^\/\/\/ caption\s/.test(first.value) || !/\n\/\/\/$/.test(last.value)) return;
	first.value = first.value.replace(/^\/\/\/ caption\s+/, '');
	last.value = last.value.replace(/\s*\/\/\/$/, '');
	addClass(p, 'guide-caption');
}

function walk(node) {
	if (!node.children) return;
	if (node.type === 'paragraph') caption(node);
	node.children.forEach((child, i) => {
		const next = node.children[i + 1], align = next?.type === 'text' && /^\{align=(left|right|center)\}/.exec(next.value);
		if (child.type === 'image' && align) {
			addClass(child, `guide-align-${align[1]}`);
			next.value = next.value.slice(align[0].length);
		}
	});
	node.children = node.children.flatMap(child => {
		if (child.type === 'code') return fence(child);
		if (child.type === 'text' && /!\[block:/i.test(child.value)) return chips(child.value);
		walk(child);
		return child;
	});
}

module.exports = () => walk;

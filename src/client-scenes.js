// three.js only loads on pages that have a scene
export function onRouteDidUpdate() {
	if (document.querySelector('.guide-scene:not([data-mounted])')) import('./scene-viewer').then(m => m.mountScenes());
}

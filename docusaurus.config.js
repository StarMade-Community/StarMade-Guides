// main deploys to /release/ and pre to /pre/ (see .github/workflows/deploy-docs.yml)
const version = process.env.SITE_VERSION || 'release';
const site = 'https://starmade-community.github.io';
const root = '/StarMade-Guides/';

module.exports = {
	title: 'StarMade Guides',
	tagline: 'Guides and documentation for StarMade',
	url: site,
	baseUrl: `${root}${version}/`,
	trailingSlash: true,
	onBrokenLinks: 'warn',
	markdown: {
		format: 'detect', // .md stays plain CommonMark, the same files the game reads
		hooks: { onBrokenMarkdownLinks: 'warn' },
	},
	// Served at the site root: blocks/ for the scene viewer
	staticDirectories: ['docs/assets'],
	clientModules: [require.resolve('./src/client-scenes.js')],
	presets: [['classic', {
		docs: {
			routeBasePath: '/',
			// docs/assets/ is images and the scene viewer's data, not pages
			exclude: ['assets/**', '**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**'],
			// Section labels from folder names ("05-ai-and-fleets" -> "AI & Fleets"), so docs/ needs no _category_ files
			sidebarItemsGenerator: async ({ defaultSidebarItemsGenerator, ...args }) => {
				const words = { ai: 'AI', and: '&' };
				const label = items => items.map(i => i.type !== 'category' ? i : {
					...i,
					label: i.label.split('-').map(w => words[w] ?? w[0].toUpperCase() + w.slice(1)).join(' '),
					items: label(i.items),
				});
				return label(await defaultSidebarItemsGenerator(args));
			},
			beforeDefaultRemarkPlugins: [require('./src/plugins/guide-fences')],
			editUrl: `https://github.com/StarMade-Community/StarMade-Guides/edit/${version === 'pre' ? 'pre' : 'main'}/`,
		},
		blog: false,
		pages: false,
		theme: { customCss: require.resolve('./src/css/custom.css') },
	}]],
	themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), { docsRouteBasePath: '/', indexBlog: false, hashed: true }]],
	themeConfig: {
		colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
		navbar: {
			title: 'StarMade Guides',
			items: [
				{
					type: 'dropdown',
					label: version === 'pre' ? 'Pre-release' : 'Release',
					position: 'right',
					items: [
						{ label: 'Release', href: `${site}${root}release/`, target: '_self' },
						{ label: 'Pre-release', href: `${site}${root}pre/`, target: '_self' },
					],
				},
				{ href: 'https://github.com/StarMade-Community/StarMade-Guides', label: 'GitHub', position: 'right' },
			],
		},
	},
};

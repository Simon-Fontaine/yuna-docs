const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "Yuna Docs",
		tagline: "Retrouvez toute la documentation de mes projets",
		url: "https://yunatest.xyz/",
		baseUrl: "/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "Simon-Fontaine",
		projectName: "yuna-docs",

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						includeCurrentVersion: true,
						// lastVersion: "current",
						versions: {
							current: {
								label: "beta",
								path: "./docs",
							},
						},
						// Please change this to your repo.
						editUrl: "https://github.com/Simon-Fontaine/yuna-docs/tree/main/",
					},
					blog: {
						showReadingTime: true,
						// Please change this to your repo.
						editUrl: "https://github.com/Simon-Fontaine/yuna-docs/tree/main/",
					},
					theme: {
						customCss: require.resolve("./src/css/custom.css"),
					},
				}),
			],
		],
		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				navbar: {
					title: "Yuna Docs",
					logo: {
						alt: "Yuna Logo",
						src: "img/YunaLogo.svg",
					},
					items: [
						{
							type: "doc",
							docId: "intro",
							position: "left",
							label: "Documentation",
						},
						{
							type: "docsVersionDropdown",
							position: "right",
						},
						{
							href: "https://github.com/Simon-Fontaine/yuna-docs",
							label: "GitHub",
							position: "right",
						},
					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Docs",
							items: [
								{
									label: "Documentation",
									to: "/docs/intro",
								},
							],
						},
						{
							title: "Community",
							items: [
								{
									label: "Discord",
									href: "https://discord.gg/VDWb3yDRND",
								},
							],
						},
						{
							title: "More",
							items: [
								{
									label: "GitHub",
									href: "https://github.com/Simon-Fontaine/yuna-docs",
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} Yuna Docs. Built with Docusaurus.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
					additionalLanguages: ["php"],
				},
			}),
	}
);

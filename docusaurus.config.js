const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "Yuna",
		tagline: "A useful Discord bot",
		url: "https://yunabot.netlify.app/",
		baseUrl: "/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "facebook", // Usually your GitHub org/user name.
		projectName: "docusaurus", // Usually your repo name.

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						// Please change this to your repo.
						editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
					},
					blog: {
						showReadingTime: true,
						// Please change this to your repo.
						editUrl: "https://github.com/facebook/docusaurus/edit/main/website/blog/",
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
					title: "Yuna",
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
						{ to: "/blog", label: "Changelog", position: "left" },
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
									label: "Changelog",
									to: "/blog",
								},
								{
									label: "GitHub",
									href: "https://github.com/Simon-Fontaine/yuna-docs",
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} YunaBot, Inc. Built with Docusaurus.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);

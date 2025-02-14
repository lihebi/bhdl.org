/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "BHDL.org",
  tagline:
    "A Lucid, Expressive, and Embedded Programming Language and System for PCB Designs",
  url: "https://bhdl.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.jpeg",
  organizationName: "bhdl", // Usually your GitHub org/user name.
  projectName: "bhdl.org", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      additionalLanguages: ["scheme", "racket"],
    },
    gtag: {
      trackingID: "G-HC9ZP6PH1G",
    },
    navbar: {
      // title: "BHDL.org",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.jpeg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/examples", label: "Examples", position: "left" },
        { to: "/publications", label: "Publications", position: "left" },
        // {
        //   href: "https://cloud.bhdl.org",
        //   label: "Cloud",
        //   position: "right",
        // },
        {
          href: "https://github.com/bhdl/bhdl",
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}

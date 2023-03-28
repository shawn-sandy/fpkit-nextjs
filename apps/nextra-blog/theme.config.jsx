// import { DocsThemeConfig } from 'nextra-theme-docs'
export default {
  logo: (
    <h1>
      <span>Nextra Base</span>
    </h1>
  ),
  brand: {
    logo: <span>FPKIT NEXTRA</span>,
    url: "/",
  },
  banner: {
    title: "FPKIT NEXTRA",
    description: "A simple easy to use nextra theme",
    link: "/",
    linkLabel: "Get Started",
  },
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
        }}
      >
        {children}
      </h1>
    ),
  },
  darkMode: true,
};

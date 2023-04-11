import { MDXComponents } from "@fpkit/nextjs/libs/libs";
import { useConfig } from "nextra-theme-blog";

export default {
  // const { frontMatter } = useConfig();
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FPKIT Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  logo: (
    <h1>
      <span>Nextra Base</span>
    </h1>
  ),
  brand: {
    logo: <span>FPKIT NEXTRA (DEV)</span>,
    url: "/",
  },
  siteDescription: "A simple easy to use nextra theme",
  siteName: "FPKIT NEXTRA",
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
  darkMode: true,
  components: MDXComponents,
};

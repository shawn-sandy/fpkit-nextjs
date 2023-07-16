import { StoryObj, Meta } from "@storybook/react";

import { within, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// 👇 import you component here -- import Component form "./component";
import Navigation from "./navigation";

// replace Component with your component name
const meta: Meta<typeof Navigation> = {
  title: "Nextra Components/Navigation",
  // @ts-ignore
  component: Navigation,
  // @ts-ignore
  argTypes: {},
};

const dataSet = [
  {
    kind: "Meta",
    data: {
      index: "Introduction",
      another: "Another Page",
      advanced: "Advanced (A Folder)",
      about: {
        title: "About",
        type: "page",
      },
      contact: {
        title: "Contact ↗",
        type: "page",
        href: "https://twitter.com/shuding_",
        newWindow: true,
      },
    },
  },
  {
    kind: "MdxPage",
    name: "about",
    route: "/about",
  },
  {
    kind: "Folder",
    name: "advanced",
    route: "/advanced",
    children: [
      {
        kind: "MdxPage",
        name: "satori",
        route: "/advanced/satori",
      },
      {
        kind: "Meta",
        data: {
          satori: "Satori",
        },
      },
    ],
  },
  {
    kind: "MdxPage",
    name: "advanced",
    route: "/advanced",
    frontMatter: {
      title: "Advanced title",
      description:
        "The city bustled with people rushing to work, the sound of honking cars and chatter filling the air. The tall skyscrapers towered over the streets, their windows glinting in the sunlight. A sense of hustle and bustle prevailed in this concrete jungle.",
      date: "2023-01-22T23:51:45.574Z",
    },
  },
  {
    kind: "MdxPage",
    name: "another",
    route: "/another",
    frontMatter: {
      title: "Another page",
      description:
        "Web developers work tirelessly to create seamless digital experiences. They code and debug, troubleshoot and optimize, all to deliver optimal performance and user satisfaction.",
    },
  },
  {
    kind: "MdxPage",
    name: "index",
    route: "/",
    frontMatter: {
      title: "Introduction",
      description:
        "A simple, powerful and flexible site generation framework with everything you love from Next.js.",
    },
  },
];

const branding = {
  url: "/",
  logo: "Branding Logo",
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const NavigationBar: Story = {
  args: {
    // @ts-ignore
    data: dataSet,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole("navigation");
    expect(nav).toBeDefined();
    const links = canvas.getByText(branding.logo);
    expect(links).toBeDefined();
  },
};

export const BrandedNavigationBar: Story = {
  args: {
    ...NavigationBar.args,
    // @ts-ignore
    brand: branding,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole("navigation");
    const brand = canvas.getByRole("heading");
    const links = canvas.getByText(branding.logo);

    expect(nav).toBeDefined();
    expect(brand).toBeDefined();
    expect(brand.getElementsByTagName("a")).toBeDefined();
    expect(links).toBeDefined();
  },
};

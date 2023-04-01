import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Navbar from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Nextra Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const navList = [
  {
    route: "/home",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

export const BaseNavbar: Story = {
  args: {
    navList: navList,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = canvas.getByRole("navigation");
    expect(nav).toBeDefined();
    const links = canvas.getAllByRole("link");
    expect(links).toHaveLength(navList.length);
  },
};

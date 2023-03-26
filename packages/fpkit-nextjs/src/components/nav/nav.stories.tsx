import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Nav, { NavItem } from "./nav";

const meta: Meta<typeof Nav> = {
  title: "Nextra Components/Nav",
  component: Nav,
  // @ts-ignore
  subcomponents: { NavItem },
  argTypes: {
    children: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

const navList = (
  <ul>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
);

export const BaseNav: Story = {
  args: {
    children: navList,
  },
};

const navListItems = (
  <ul>
    <NavItem route="/about">About</NavItem>
    <NavItem route="/blog">Blog</NavItem>
    <NavItem route="/contact">Contact</NavItem>
  </ul>
);

export const NavItems: Story = {
  args: {
    children: navListItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutLink = canvas.getByRole("link", { name: "About" });
    const links = canvas.getAllByRole("link");
    expect(links).toHaveLength(3);
  },
};

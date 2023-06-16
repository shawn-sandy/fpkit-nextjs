import { StoryObj, Meta } from "@storybook/react";
import React from "react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// 👇 import you component here -- import Component form "./component";
import NavList from "./nav-list";
import { Nav } from "./nav";
import { navListItems } from "../data/nav-list";

// replace Component with your component name
const meta: Meta<typeof NavList> = {
  title: "Nextra Components/NavList",
  component: NavList,
  // @ts-ignore
  args: {
    pages: navListItems,
  },
};

export default meta;
type Story = StoryObj<typeof NavList>;

export const Navbar: Story = {
  args: {},
  render: (args) => {
    return (
      <Nav>
        <NavList {...args} />
      </Nav>
    );
  },
};

export const NavbarList: Story = {
  args: {},
};

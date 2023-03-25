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
    url: "/home",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];

export const BaseNavbar: Story = {
  args: {
    navList: navList,
  },
};

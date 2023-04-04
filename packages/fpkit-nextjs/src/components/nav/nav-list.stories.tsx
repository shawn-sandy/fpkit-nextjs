import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Nav } from "./nav";

import NavList from "./nav-list";

import { navListItems } from "../data/nav-list";

const meta: Meta<typeof NavList> = {
  title: "Nextra Components/Navbar",
  component: NavList,
  // @ts-ignore
  //   subcomponents: { NavItem },
  args: {},
};

export default meta;
type Story = StoryObj<typeof NavList>;

export const List: Story = {
  args: {
    pageList: navListItems,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole("list");
    const links = canvas.getAllByRole("link");

    // @ts-ignore
    expect(list).toBeInTheDocument();
    expect(links).toHaveLength(navListItems.length);
  },
};

export const RenderNavbar: Story = {
  args: {
    ...List.args,
  },
  render: ({ ...args }) => (
    <Nav>
      <NavList {...args} />
    </Nav>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // @ts-ignore
    await Default.play({ canvasElement });

    const nav = canvas.getByRole("navigation");
    // @ts-ignore
    expect(nav).toBeInTheDocument();
  },
};

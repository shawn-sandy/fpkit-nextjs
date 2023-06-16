import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// 👉 import your component here - import COMPONENT from "./COMPONENT";
// 👉 replace all instance of COMPONENT with your component name;
// 👉 modify the args to match your component props;
// 👉 remove these comments before committing;

import NavBrand from "./nav-brand";

const meta: Meta<typeof NavBrand> = {
  title: "Nextra Components/NavBrand",
  component: NavBrand,
  // @ts-ignore
  //   subcomponents: { NavItem },
  args: {},
};

export default meta;
type Story = StoryObj<typeof NavBrand>;

const brand = {
  logo: "FPKit NextJS",
  url: "/",
};

export const TextBrand: Story = {
  args: brand,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    const logo = canvas.getByText(brand.logo);

    // @ts-ignore
    expect(link).toBeInTheDocument();
    // @ts-ignore
    expect(logo).toBeInTheDocument();
  },
};

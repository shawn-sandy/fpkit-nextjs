import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { headings } from "./toc.test.data";

import Toc from "./toc";
const meta: Meta<typeof Toc> = {
  title: "Nextra Components/Toc",
  component: Toc,
  // @ts-ignore
  argTypes: {
    children: {
      control: { type: "object" },
    },
  },
  args: {
    items: headings,
  },
};

export default meta;
type Story = StoryObj<typeof Toc>;

export const MyComponent: Story = {
  args: {},
};

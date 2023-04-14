import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Toc from "./toc";
// replace Component with your component name
const meta: Meta<typeof Toc> = {
  title: "Nextra Components/Toc",
  component: Toc,
  // @ts-ignore
  argTypes: {
    children: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toc>;

export const MyComponent: Story = {
  args: {},
};

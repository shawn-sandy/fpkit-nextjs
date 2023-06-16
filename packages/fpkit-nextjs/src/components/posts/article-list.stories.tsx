import { StoryObj, Meta } from "@storybook/react";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// 👇 import you component here -- import Component form "./component";
import ArticleList from "./article-list";

// replace Component with your component name
const meta: Meta<typeof ArticleList> = {
  title: "Nextra Components/Article List",
  component: ArticleList,
  // @ts-ignore
  argTypes: {},
  args: {
    title: "My Title",
    description: "My Description",
    route: "/",
    linkText: "Continue Reading",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const ArticleListComponent: Story = {
  args: {},
};

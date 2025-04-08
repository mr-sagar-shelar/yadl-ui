import type { Meta, StoryObj } from "@storybook/react";
import MyCodeSnippets from "../MyCodeSnippets";

const meta: Meta<typeof MyCodeSnippets> = { title: "unDraw/MyCodeSnippets", component: MyCodeSnippets };

export default meta;
type Story = StoryObj<typeof MyCodeSnippets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

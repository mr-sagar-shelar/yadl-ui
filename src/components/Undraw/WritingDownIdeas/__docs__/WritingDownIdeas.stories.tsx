import type { Meta, StoryObj } from "@storybook/react";
import WritingDownIdeas from "../WritingDownIdeas";

const meta: Meta<typeof WritingDownIdeas> = { title: "unDraw/WritingDownIdeas", component: WritingDownIdeas };

export default meta;
type Story = StoryObj<typeof WritingDownIdeas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

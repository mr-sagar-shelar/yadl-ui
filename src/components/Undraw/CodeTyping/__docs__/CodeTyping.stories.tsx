import type { Meta, StoryObj } from "@storybook/react";
import CodeTyping from "../CodeTyping";

const meta: Meta<typeof CodeTyping> = { title: "unDraw/CodeTyping", component: CodeTyping };

export default meta;
type Story = StoryObj<typeof CodeTyping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

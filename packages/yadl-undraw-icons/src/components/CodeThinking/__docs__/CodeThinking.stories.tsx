import type { Meta, StoryObj } from "@storybook/react";
import CodeThinking from "../CodeThinking";

const meta: Meta<typeof CodeThinking> = { title: "unDraw/CodeThinking", component: CodeThinking };

export default meta;
type Story = StoryObj<typeof CodeThinking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

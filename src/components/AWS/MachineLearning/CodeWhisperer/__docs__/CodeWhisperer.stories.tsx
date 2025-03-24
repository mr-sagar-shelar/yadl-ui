import type { Meta, StoryObj } from "@storybook/react";
import CodeWhisperer from "../CodeWhisperer";

const meta: Meta<typeof CodeWhisperer> = { title: "AWS/MachineLearning/CodeWhisperer", component: CodeWhisperer };

export default meta;
type Story = StoryObj<typeof CodeWhisperer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

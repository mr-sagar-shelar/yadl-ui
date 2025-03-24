import type { Meta, StoryObj } from "@storybook/react";
import CodeInspection from "../CodeInspection";

const meta: Meta<typeof CodeInspection> = { title: "unDraw/CodeInspection", component: CodeInspection };

export default meta;
type Story = StoryObj<typeof CodeInspection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

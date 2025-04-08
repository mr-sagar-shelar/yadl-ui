import type { Meta, StoryObj } from "@storybook/react";
import Floating from "../Floating";

const meta: Meta<typeof Floating> = { title: "unDraw/Floating", component: Floating };

export default meta;
type Story = StoryObj<typeof Floating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

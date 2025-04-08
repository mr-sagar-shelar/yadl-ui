import type { Meta, StoryObj } from "@storybook/react";
import Books from "../Books";

const meta: Meta<typeof Books> = { title: "unDraw/Books", component: Books };

export default meta;
type Story = StoryObj<typeof Books>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

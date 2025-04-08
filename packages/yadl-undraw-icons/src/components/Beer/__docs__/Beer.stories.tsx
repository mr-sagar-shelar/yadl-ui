import type { Meta, StoryObj } from "@storybook/react";
import Beer from "../Beer";

const meta: Meta<typeof Beer> = { title: "unDraw/Beer", component: Beer };

export default meta;
type Story = StoryObj<typeof Beer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

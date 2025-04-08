import type { Meta, StoryObj } from "@storybook/react";
import Responsive from "../Responsive";

const meta: Meta<typeof Responsive> = { title: "unDraw/Responsive", component: Responsive };

export default meta;
type Story = StoryObj<typeof Responsive>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Pumpkin from "../Pumpkin";

const meta: Meta<typeof Pumpkin> = { title: "unDraw/Pumpkin", component: Pumpkin };

export default meta;
type Story = StoryObj<typeof Pumpkin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

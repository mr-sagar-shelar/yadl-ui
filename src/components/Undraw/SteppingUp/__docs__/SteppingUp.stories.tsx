import type { Meta, StoryObj } from "@storybook/react";
import SteppingUp from "../SteppingUp";

const meta: Meta<typeof SteppingUp> = { title: "unDraw/SteppingUp", component: SteppingUp };

export default meta;
type Story = StoryObj<typeof SteppingUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

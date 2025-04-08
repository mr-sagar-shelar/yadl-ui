import type { Meta, StoryObj } from "@storybook/react";
import MovingForward from "../MovingForward";

const meta: Meta<typeof MovingForward> = { title: "unDraw/MovingForward", component: MovingForward };

export default meta;
type Story = StoryObj<typeof MovingForward>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

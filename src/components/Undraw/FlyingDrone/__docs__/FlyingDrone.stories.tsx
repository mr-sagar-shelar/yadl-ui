import type { Meta, StoryObj } from "@storybook/react";
import FlyingDrone from "../FlyingDrone";

const meta: Meta<typeof FlyingDrone> = { title: "unDraw/FlyingDrone", component: FlyingDrone };

export default meta;
type Story = StoryObj<typeof FlyingDrone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import WalkingInRain from "../WalkingInRain";

const meta: Meta<typeof WalkingInRain> = { title: "unDraw/WalkingInRain", component: WalkingInRain };

export default meta;
type Story = StoryObj<typeof WalkingInRain>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

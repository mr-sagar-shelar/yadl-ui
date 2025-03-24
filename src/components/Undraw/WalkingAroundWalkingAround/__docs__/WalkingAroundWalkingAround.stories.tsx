import type { Meta, StoryObj } from "@storybook/react";
import WalkingAroundWalkingAround from "../WalkingAroundWalkingAround";

const meta: Meta<typeof WalkingAroundWalkingAround> = { title: "unDraw/WalkingAroundWalkingAround", component: WalkingAroundWalkingAround };

export default meta;
type Story = StoryObj<typeof WalkingAroundWalkingAround>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

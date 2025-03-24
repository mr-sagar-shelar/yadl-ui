import type { Meta, StoryObj } from "@storybook/react";
import WalkingOutside from "../WalkingOutside";

const meta: Meta<typeof WalkingOutside> = { title: "unDraw/WalkingOutside", component: WalkingOutside };

export default meta;
type Story = StoryObj<typeof WalkingOutside>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import WalkingTogether from "../WalkingTogether";

const meta: Meta<typeof WalkingTogether> = { title: "unDraw/WalkingTogether", component: WalkingTogether };

export default meta;
type Story = StoryObj<typeof WalkingTogether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

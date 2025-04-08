import type { Meta, StoryObj } from "@storybook/react";
import MomentToRemember from "../MomentToRemember";

const meta: Meta<typeof MomentToRemember> = { title: "unDraw/MomentToRemember", component: MomentToRemember };

export default meta;
type Story = StoryObj<typeof MomentToRemember>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

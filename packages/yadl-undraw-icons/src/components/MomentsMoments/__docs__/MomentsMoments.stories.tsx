import type { Meta, StoryObj } from "@storybook/react";
import MomentsMoments from "../MomentsMoments";

const meta: Meta<typeof MomentsMoments> = { title: "unDraw/MomentsMoments", component: MomentsMoments };

export default meta;
type Story = StoryObj<typeof MomentsMoments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

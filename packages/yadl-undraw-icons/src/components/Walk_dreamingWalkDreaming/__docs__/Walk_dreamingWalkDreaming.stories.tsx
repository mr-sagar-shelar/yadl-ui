import type { Meta, StoryObj } from "@storybook/react";
import Walk_dreamingWalkDreaming from "../Walk_dreamingWalkDreaming";

const meta: Meta<typeof Walk_dreamingWalkDreaming> = { title: "unDraw/Walk_dreamingWalkDreaming", component: Walk_dreamingWalkDreaming };

export default meta;
type Story = StoryObj<typeof Walk_dreamingWalkDreaming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

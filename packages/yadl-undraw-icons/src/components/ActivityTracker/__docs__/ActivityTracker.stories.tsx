import type { Meta, StoryObj } from "@storybook/react";
import ActivityTracker from "../ActivityTracker";

const meta: Meta<typeof ActivityTracker> = { title: "unDraw/ActivityTracker", component: ActivityTracker };

export default meta;
type Story = StoryObj<typeof ActivityTracker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import WorkInProgress from "../WorkInProgress";

const meta: Meta<typeof WorkInProgress> = { title: "unDraw/WorkInProgress", component: WorkInProgress };

export default meta;
type Story = StoryObj<typeof WorkInProgress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

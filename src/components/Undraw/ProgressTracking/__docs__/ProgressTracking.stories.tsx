import type { Meta, StoryObj } from "@storybook/react";
import ProgressTracking from "../ProgressTracking";

const meta: Meta<typeof ProgressTracking> = { title: "unDraw/ProgressTracking", component: ProgressTracking };

export default meta;
type Story = StoryObj<typeof ProgressTracking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

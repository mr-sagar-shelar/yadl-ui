import type { Meta, StoryObj } from "@storybook/react";
import LookoutforMetrics from "../LookoutforMetrics";

const meta: Meta<typeof LookoutforMetrics> = { title: "AWS/MachineLearning/LookoutforMetrics", component: LookoutforMetrics };

export default meta;
type Story = StoryObj<typeof LookoutforMetrics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

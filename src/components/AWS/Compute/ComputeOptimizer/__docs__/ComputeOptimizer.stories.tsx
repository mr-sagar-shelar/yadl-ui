import type { Meta, StoryObj } from "@storybook/react";
import ComputeOptimizer from "../ComputeOptimizer";

const meta: Meta<typeof ComputeOptimizer> = { title: "AWS/Compute/ComputeOptimizer", component: ComputeOptimizer };

export default meta;
type Story = StoryObj<typeof ComputeOptimizer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

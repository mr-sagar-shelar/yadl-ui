import type { Meta, StoryObj } from "@storybook/react";
import ParallelCluster from "../ParallelCluster";

const meta: Meta<typeof ParallelCluster> = { title: "AWS/Compute/ParallelCluster", component: ParallelCluster };

export default meta;
type Story = StoryObj<typeof ParallelCluster>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

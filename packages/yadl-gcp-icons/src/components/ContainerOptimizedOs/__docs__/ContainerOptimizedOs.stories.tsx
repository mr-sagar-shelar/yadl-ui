import type { Meta, StoryObj } from "@storybook/react";
import ContainerOptimizedOs from "../ContainerOptimizedOs";

const meta: Meta<typeof ContainerOptimizedOs> = { title: "GCP/ContainerOptimizedOs", component: ContainerOptimizedOs };

export default meta;
type Story = StoryObj<typeof ContainerOptimizedOs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

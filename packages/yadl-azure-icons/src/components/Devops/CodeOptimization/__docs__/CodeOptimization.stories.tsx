import type { Meta, StoryObj } from "@storybook/react";
import CodeOptimization from "../CodeOptimization";

const meta: Meta<typeof CodeOptimization> = { title: "Azure/Devops/CodeOptimization", component: CodeOptimization };

export default meta;
type Story = StoryObj<typeof CodeOptimization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

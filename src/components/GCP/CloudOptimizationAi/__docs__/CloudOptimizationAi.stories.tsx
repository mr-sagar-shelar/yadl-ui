import type { Meta, StoryObj } from "@storybook/react";
import CloudOptimizationAi from "../CloudOptimizationAi";

const meta: Meta<typeof CloudOptimizationAi> = { title: "GCP/CloudOptimizationAi", component: CloudOptimizationAi };

export default meta;
type Story = StoryObj<typeof CloudOptimizationAi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

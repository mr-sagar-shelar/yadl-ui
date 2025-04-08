import type { Meta, StoryObj } from "@storybook/react";
import CloudOptimizationAiFleetRoutingApi from "../CloudOptimizationAiFleetRoutingApi";

const meta: Meta<typeof CloudOptimizationAiFleetRoutingApi> = { title: "GCP/CloudOptimizationAiFleetRoutingApi", component: CloudOptimizationAiFleetRoutingApi };

export default meta;
type Story = StoryObj<typeof CloudOptimizationAiFleetRoutingApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AzureMonitorPipeline from "../AzureMonitorPipeline";

const meta: Meta<typeof AzureMonitorPipeline> = { title: "Azure/HybridMulticloud/AzureMonitorPipeline", component: AzureMonitorPipeline };

export default meta;
type Story = StoryObj<typeof AzureMonitorPipeline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AzureMonitorDashboard from "../AzureMonitorDashboard";

const meta: Meta<typeof AzureMonitorDashboard> = { title: "Azure/Other/AzureMonitorDashboard", component: AzureMonitorDashboard };

export default meta;
type Story = StoryObj<typeof AzureMonitorDashboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

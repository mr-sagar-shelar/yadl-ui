import type { Meta, StoryObj } from "@storybook/react";
import AzureSynapseAnalytics from "../AzureSynapseAnalytics";

const meta: Meta<typeof AzureSynapseAnalytics> = { title: "Azure/Analytics/AzureSynapseAnalytics", component: AzureSynapseAnalytics };

export default meta;
type Story = StoryObj<typeof AzureSynapseAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

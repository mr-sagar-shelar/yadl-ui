import type { Meta, StoryObj } from "@storybook/react";
import AzureMonitorsforSAPSolutions from "../AzureMonitorsforSAPSolutions";

const meta: Meta<typeof AzureMonitorsforSAPSolutions> = { title: "Azure/Monitor/AzureMonitorsforSAPSolutions", component: AzureMonitorsforSAPSolutions };

export default meta;
type Story = StoryObj<typeof AzureMonitorsforSAPSolutions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

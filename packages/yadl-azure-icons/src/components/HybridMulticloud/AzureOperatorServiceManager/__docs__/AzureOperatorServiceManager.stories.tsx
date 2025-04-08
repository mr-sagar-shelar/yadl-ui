import type { Meta, StoryObj } from "@storybook/react";
import AzureOperatorServiceManager from "../AzureOperatorServiceManager";

const meta: Meta<typeof AzureOperatorServiceManager> = { title: "Azure/HybridMulticloud/AzureOperatorServiceManager", component: AzureOperatorServiceManager };

export default meta;
type Story = StoryObj<typeof AzureOperatorServiceManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

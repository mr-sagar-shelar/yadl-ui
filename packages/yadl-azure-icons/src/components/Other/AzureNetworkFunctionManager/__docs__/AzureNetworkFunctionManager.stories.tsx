import type { Meta, StoryObj } from "@storybook/react";
import AzureNetworkFunctionManager from "../AzureNetworkFunctionManager";

const meta: Meta<typeof AzureNetworkFunctionManager> = { title: "Azure/Other/AzureNetworkFunctionManager", component: AzureNetworkFunctionManager };

export default meta;
type Story = StoryObj<typeof AzureNetworkFunctionManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

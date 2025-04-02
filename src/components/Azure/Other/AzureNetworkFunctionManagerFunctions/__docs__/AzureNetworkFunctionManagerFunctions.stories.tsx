import type { Meta, StoryObj } from "@storybook/react";
import AzureNetworkFunctionManagerFunctions from "../AzureNetworkFunctionManagerFunctions";

const meta: Meta<typeof AzureNetworkFunctionManagerFunctions> = { title: "Azure/Other/AzureNetworkFunctionManagerFunctions", component: AzureNetworkFunctionManagerFunctions };

export default meta;
type Story = StoryObj<typeof AzureNetworkFunctionManagerFunctions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

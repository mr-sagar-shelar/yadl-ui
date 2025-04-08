import type { Meta, StoryObj } from "@storybook/react";
import AzureHCPCache from "../AzureHCPCache";

const meta: Meta<typeof AzureHCPCache> = { title: "Azure/Storage/AzureHCPCache", component: AzureHCPCache };

export default meta;
type Story = StoryObj<typeof AzureHCPCache>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

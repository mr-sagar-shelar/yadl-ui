import type { Meta, StoryObj } from "@storybook/react";
import AzureFirewallPolicy from "../AzureFirewallPolicy";

const meta: Meta<typeof AzureFirewallPolicy> = { title: "Azure/Networking/AzureFirewallPolicy", component: AzureFirewallPolicy };

export default meta;
type Story = StoryObj<typeof AzureFirewallPolicy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

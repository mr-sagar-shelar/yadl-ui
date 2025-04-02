import type { Meta, StoryObj } from "@storybook/react";
import AzureFirewallManager from "../AzureFirewallManager";

const meta: Meta<typeof AzureFirewallManager> = { title: "Azure/Networking/AzureFirewallManager", component: AzureFirewallManager };

export default meta;
type Story = StoryObj<typeof AzureFirewallManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

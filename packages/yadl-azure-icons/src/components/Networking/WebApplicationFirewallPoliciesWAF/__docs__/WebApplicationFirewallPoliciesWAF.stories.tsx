import type { Meta, StoryObj } from "@storybook/react";
import WebApplicationFirewallPoliciesWAF from "../WebApplicationFirewallPoliciesWAF";

const meta: Meta<typeof WebApplicationFirewallPoliciesWAF> = { title: "Azure/Networking/WebApplicationFirewallPoliciesWAF", component: WebApplicationFirewallPoliciesWAF };

export default meta;
type Story = StoryObj<typeof WebApplicationFirewallPoliciesWAF>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

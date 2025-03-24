import type { Meta, StoryObj } from "@storybook/react";
import CloudFirewallRules from "../CloudFirewallRules";

const meta: Meta<typeof CloudFirewallRules> = { title: "GCP/CloudFirewallRules", component: CloudFirewallRules };

export default meta;
type Story = StoryObj<typeof CloudFirewallRules>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

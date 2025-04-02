import type { Meta, StoryObj } from "@storybook/react";
import FirewallManager from "../FirewallManager";

const meta: Meta<typeof FirewallManager> = { title: "AWS/SecurityIdentityCompliance/FirewallManager", component: FirewallManager };

export default meta;
type Story = StoryObj<typeof FirewallManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AutomationAccounts from "../AutomationAccounts";

const meta: Meta<typeof AutomationAccounts> = { title: "Azure/ManagementGovernance/AutomationAccounts", component: AutomationAccounts };

export default meta;
type Story = StoryObj<typeof AutomationAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

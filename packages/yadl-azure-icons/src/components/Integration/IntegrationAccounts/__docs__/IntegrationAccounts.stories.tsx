import type { Meta, StoryObj } from "@storybook/react";
import IntegrationAccounts from "../IntegrationAccounts";

const meta: Meta<typeof IntegrationAccounts> = { title: "Azure/Integration/IntegrationAccounts", component: IntegrationAccounts };

export default meta;
type Story = StoryObj<typeof IntegrationAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

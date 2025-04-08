import type { Meta, StoryObj } from "@storybook/react";
import AzureMapsAccounts from "../AzureMapsAccounts";

const meta: Meta<typeof AzureMapsAccounts> = { title: "Azure/Iot/AzureMapsAccounts", component: AzureMapsAccounts };

export default meta;
type Story = StoryObj<typeof AzureMapsAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

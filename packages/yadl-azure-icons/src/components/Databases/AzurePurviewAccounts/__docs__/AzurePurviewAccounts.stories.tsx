import type { Meta, StoryObj } from "@storybook/react";
import AzurePurviewAccounts from "../AzurePurviewAccounts";

const meta: Meta<typeof AzurePurviewAccounts> = { title: "Azure/Databases/AzurePurviewAccounts", component: AzurePurviewAccounts };

export default meta;
type Story = StoryObj<typeof AzurePurviewAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

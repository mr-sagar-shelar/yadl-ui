import type { Meta, StoryObj } from "@storybook/react";
import StorageAccounts from "../StorageAccounts";

const meta: Meta<typeof StorageAccounts> = { title: "Azure/Storage/StorageAccounts", component: StorageAccounts };

export default meta;
type Story = StoryObj<typeof StorageAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import StorageAccountsClassic from "../StorageAccountsClassic";

const meta: Meta<typeof StorageAccountsClassic> = { title: "Azure/Storage/StorageAccountsClassic", component: StorageAccountsClassic };

export default meta;
type Story = StoryObj<typeof StorageAccountsClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

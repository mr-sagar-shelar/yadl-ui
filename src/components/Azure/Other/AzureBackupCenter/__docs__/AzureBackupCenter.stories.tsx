import type { Meta, StoryObj } from "@storybook/react";
import AzureBackupCenter from "../AzureBackupCenter";

const meta: Meta<typeof AzureBackupCenter> = { title: "Azure/Other/AzureBackupCenter", component: AzureBackupCenter };

export default meta;
type Story = StoryObj<typeof AzureBackupCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

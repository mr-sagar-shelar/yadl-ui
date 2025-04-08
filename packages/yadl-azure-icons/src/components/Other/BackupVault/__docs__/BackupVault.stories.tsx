import type { Meta, StoryObj } from "@storybook/react";
import BackupVault from "../BackupVault";

const meta: Meta<typeof BackupVault> = { title: "Azure/Other/BackupVault", component: BackupVault };

export default meta;
type Story = StoryObj<typeof BackupVault>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

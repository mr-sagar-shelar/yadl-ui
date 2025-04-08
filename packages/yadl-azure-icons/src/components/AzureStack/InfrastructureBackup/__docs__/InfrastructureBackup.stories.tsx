import type { Meta, StoryObj } from "@storybook/react";
import InfrastructureBackup from "../InfrastructureBackup";

const meta: Meta<typeof InfrastructureBackup> = { title: "Azure/AzureStack/InfrastructureBackup", component: InfrastructureBackup };

export default meta;
type Story = StoryObj<typeof InfrastructureBackup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

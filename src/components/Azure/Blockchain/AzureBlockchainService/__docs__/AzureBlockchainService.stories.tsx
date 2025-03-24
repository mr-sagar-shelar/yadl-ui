import type { Meta, StoryObj } from "@storybook/react";
import AzureBlockchainService from "../AzureBlockchainService";

const meta: Meta<typeof AzureBlockchainService> = { title: "Azure/Blockchain/AzureBlockchainService", component: AzureBlockchainService };

export default meta;
type Story = StoryObj<typeof AzureBlockchainService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

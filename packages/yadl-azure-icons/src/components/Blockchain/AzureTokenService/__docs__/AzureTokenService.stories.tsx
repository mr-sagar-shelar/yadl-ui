import type { Meta, StoryObj } from "@storybook/react";
import AzureTokenService from "../AzureTokenService";

const meta: Meta<typeof AzureTokenService> = { title: "Azure/Blockchain/AzureTokenService", component: AzureTokenService };

export default meta;
type Story = StoryObj<typeof AzureTokenService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

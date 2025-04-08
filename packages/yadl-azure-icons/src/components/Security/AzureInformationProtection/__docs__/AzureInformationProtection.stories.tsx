import type { Meta, StoryObj } from "@storybook/react";
import AzureInformationProtection from "../AzureInformationProtection";

const meta: Meta<typeof AzureInformationProtection> = { title: "Azure/Security/AzureInformationProtection", component: AzureInformationProtection };

export default meta;
type Story = StoryObj<typeof AzureInformationProtection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

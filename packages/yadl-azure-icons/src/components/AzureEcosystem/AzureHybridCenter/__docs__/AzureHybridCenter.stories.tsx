import type { Meta, StoryObj } from "@storybook/react";
import AzureHybridCenter from "../AzureHybridCenter";

const meta: Meta<typeof AzureHybridCenter> = { title: "Azure/AzureEcosystem/AzureHybridCenter", component: AzureHybridCenter };

export default meta;
type Story = StoryObj<typeof AzureHybridCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

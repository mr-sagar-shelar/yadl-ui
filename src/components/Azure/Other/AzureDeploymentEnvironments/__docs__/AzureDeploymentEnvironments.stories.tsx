import type { Meta, StoryObj } from "@storybook/react";
import AzureDeploymentEnvironments from "../AzureDeploymentEnvironments";

const meta: Meta<typeof AzureDeploymentEnvironments> = { title: "Azure/Other/AzureDeploymentEnvironments", component: AzureDeploymentEnvironments };

export default meta;
type Story = StoryObj<typeof AzureDeploymentEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

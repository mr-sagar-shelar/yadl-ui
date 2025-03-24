import type { Meta, StoryObj } from "@storybook/react";
import AzureCloudShell from "../AzureCloudShell";

const meta: Meta<typeof AzureCloudShell> = { title: "Azure/Other/AzureCloudShell", component: AzureCloudShell };

export default meta;
type Story = StoryObj<typeof AzureCloudShell>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

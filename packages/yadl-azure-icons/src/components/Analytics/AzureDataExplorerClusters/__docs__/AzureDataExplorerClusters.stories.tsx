import type { Meta, StoryObj } from "@storybook/react";
import AzureDataExplorerClusters from "../AzureDataExplorerClusters";

const meta: Meta<typeof AzureDataExplorerClusters> = { title: "Azure/Analytics/AzureDataExplorerClusters", component: AzureDataExplorerClusters };

export default meta;
type Story = StoryObj<typeof AzureDataExplorerClusters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

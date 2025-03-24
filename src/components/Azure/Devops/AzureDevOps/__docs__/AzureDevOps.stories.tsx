import type { Meta, StoryObj } from "@storybook/react";
import AzureDevOps from "../AzureDevOps";

const meta: Meta<typeof AzureDevOps> = { title: "Azure/Devops/AzureDevOps", component: AzureDevOps };

export default meta;
type Story = StoryObj<typeof AzureDevOps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

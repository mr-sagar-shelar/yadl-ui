import type { Meta, StoryObj } from "@storybook/react";
import AzureArc from "../AzureArc";

const meta: Meta<typeof AzureArc> = { title: "Azure/ManagementGovernance/AzureArc", component: AzureArc };

export default meta;
type Story = StoryObj<typeof AzureArc>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

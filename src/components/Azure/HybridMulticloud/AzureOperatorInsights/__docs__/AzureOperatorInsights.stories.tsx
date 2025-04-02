import type { Meta, StoryObj } from "@storybook/react";
import AzureOperatorInsights from "../AzureOperatorInsights";

const meta: Meta<typeof AzureOperatorInsights> = { title: "Azure/HybridMulticloud/AzureOperatorInsights", component: AzureOperatorInsights };

export default meta;
type Story = StoryObj<typeof AzureOperatorInsights>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

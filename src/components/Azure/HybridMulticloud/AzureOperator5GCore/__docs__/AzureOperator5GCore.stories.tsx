import type { Meta, StoryObj } from "@storybook/react";
import AzureOperator5GCore from "../AzureOperator5GCore";

const meta: Meta<typeof AzureOperator5GCore> = { title: "Azure/HybridMulticloud/AzureOperator5GCore", component: AzureOperator5GCore };

export default meta;
type Story = StoryObj<typeof AzureOperator5GCore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

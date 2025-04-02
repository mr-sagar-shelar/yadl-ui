import type { Meta, StoryObj } from "@storybook/react";
import AzureOperatorNexus from "../AzureOperatorNexus";

const meta: Meta<typeof AzureOperatorNexus> = { title: "Azure/HybridMulticloud/AzureOperatorNexus", component: AzureOperatorNexus };

export default meta;
type Story = StoryObj<typeof AzureOperatorNexus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

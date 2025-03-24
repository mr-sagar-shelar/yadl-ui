import type { Meta, StoryObj } from "@storybook/react";
import AzureHPCWorkbenches from "../AzureHPCWorkbenches";

const meta: Meta<typeof AzureHPCWorkbenches> = { title: "Azure/Other/AzureHPCWorkbenches", component: AzureHPCWorkbenches };

export default meta;
type Story = StoryObj<typeof AzureHPCWorkbenches>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AzureStackHCISizer from "../AzureStackHCISizer";

const meta: Meta<typeof AzureStackHCISizer> = { title: "Azure/Iot/AzureStackHCISizer", component: AzureStackHCISizer };

export default meta;
type Story = StoryObj<typeof AzureStackHCISizer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

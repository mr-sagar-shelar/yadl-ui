import type { Meta, StoryObj } from "@storybook/react";
import AzureADB2C from "../AzureADB2C";

const meta: Meta<typeof AzureADB2C> = { title: "Azure/Identity/AzureADB2C", component: AzureADB2C };

export default meta;
type Story = StoryObj<typeof AzureADB2C>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

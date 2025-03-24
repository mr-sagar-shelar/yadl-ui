import type { Meta, StoryObj } from "@storybook/react";
import AzureSQL from "../AzureSQL";

const meta: Meta<typeof AzureSQL> = { title: "Azure/Databases/AzureSQL", component: AzureSQL };

export default meta;
type Story = StoryObj<typeof AzureSQL>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

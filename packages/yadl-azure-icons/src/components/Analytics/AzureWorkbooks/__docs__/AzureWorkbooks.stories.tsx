import type { Meta, StoryObj } from "@storybook/react";
import AzureWorkbooks from "../AzureWorkbooks";

const meta: Meta<typeof AzureWorkbooks> = { title: "Azure/Analytics/AzureWorkbooks", component: AzureWorkbooks };

export default meta;
type Story = StoryObj<typeof AzureWorkbooks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

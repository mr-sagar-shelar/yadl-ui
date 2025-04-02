import type { Meta, StoryObj } from "@storybook/react";
import AzureDataboxGateway from "../AzureDataboxGateway";

const meta: Meta<typeof AzureDataboxGateway> = { title: "Azure/Storage/AzureDataboxGateway", component: AzureDataboxGateway };

export default meta;
type Story = StoryObj<typeof AzureDataboxGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

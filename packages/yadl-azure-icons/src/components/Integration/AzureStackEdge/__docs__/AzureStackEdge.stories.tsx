import type { Meta, StoryObj } from "@storybook/react";
import AzureStackEdge from "../AzureStackEdge";

const meta: Meta<typeof AzureStackEdge> = { title: "Azure/Integration/AzureStackEdge", component: AzureStackEdge };

export default meta;
type Story = StoryObj<typeof AzureStackEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

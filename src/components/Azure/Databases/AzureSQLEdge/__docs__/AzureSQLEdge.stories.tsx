import type { Meta, StoryObj } from "@storybook/react";
import AzureSQLEdge from "../AzureSQLEdge";

const meta: Meta<typeof AzureSQLEdge> = { title: "Azure/Databases/AzureSQLEdge", component: AzureSQLEdge };

export default meta;
type Story = StoryObj<typeof AzureSQLEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

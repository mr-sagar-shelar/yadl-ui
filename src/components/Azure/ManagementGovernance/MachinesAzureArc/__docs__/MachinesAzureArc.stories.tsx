import type { Meta, StoryObj } from "@storybook/react";
import MachinesAzureArc from "../MachinesAzureArc";

const meta: Meta<typeof MachinesAzureArc> = { title: "Azure/ManagementGovernance/MachinesAzureArc", component: MachinesAzureArc };

export default meta;
type Story = StoryObj<typeof MachinesAzureArc>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

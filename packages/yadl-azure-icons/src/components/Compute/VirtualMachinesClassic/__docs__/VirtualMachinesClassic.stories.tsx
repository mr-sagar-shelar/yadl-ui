import type { Meta, StoryObj } from "@storybook/react";
import VirtualMachinesClassic from "../VirtualMachinesClassic";

const meta: Meta<typeof VirtualMachinesClassic> = { title: "Azure/Compute/VirtualMachinesClassic", component: VirtualMachinesClassic };

export default meta;
type Story = StoryObj<typeof VirtualMachinesClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

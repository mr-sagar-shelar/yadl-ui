import type { Meta, StoryObj } from "@storybook/react";
import VirtualMachine from "../VirtualMachine";

const meta: Meta<typeof VirtualMachine> = { title: "Azure/Compute/VirtualMachine", component: VirtualMachine };

export default meta;
type Story = StoryObj<typeof VirtualMachine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

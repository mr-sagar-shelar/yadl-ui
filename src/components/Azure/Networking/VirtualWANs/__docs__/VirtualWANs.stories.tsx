import type { Meta, StoryObj } from "@storybook/react";
import VirtualWANs from "../VirtualWANs";

const meta: Meta<typeof VirtualWANs> = { title: "Azure/Networking/VirtualWANs", component: VirtualWANs };

export default meta;
type Story = StoryObj<typeof VirtualWANs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

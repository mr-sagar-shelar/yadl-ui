import type { Meta, StoryObj } from "@storybook/react";
import VirtualNetworks from "../VirtualNetworks";

const meta: Meta<typeof VirtualNetworks> = { title: "Azure/Networking/VirtualNetworks", component: VirtualNetworks };

export default meta;
type Story = StoryObj<typeof VirtualNetworks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

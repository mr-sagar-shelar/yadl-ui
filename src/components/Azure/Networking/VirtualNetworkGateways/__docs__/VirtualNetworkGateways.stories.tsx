import type { Meta, StoryObj } from "@storybook/react";
import VirtualNetworkGateways from "../VirtualNetworkGateways";

const meta: Meta<typeof VirtualNetworkGateways> = { title: "Azure/Networking/VirtualNetworkGateways", component: VirtualNetworkGateways };

export default meta;
type Story = StoryObj<typeof VirtualNetworkGateways>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

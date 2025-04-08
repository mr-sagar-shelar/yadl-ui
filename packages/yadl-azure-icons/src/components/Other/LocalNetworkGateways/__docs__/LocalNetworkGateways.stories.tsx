import type { Meta, StoryObj } from "@storybook/react";
import LocalNetworkGateways from "../LocalNetworkGateways";

const meta: Meta<typeof LocalNetworkGateways> = { title: "Azure/Other/LocalNetworkGateways", component: LocalNetworkGateways };

export default meta;
type Story = StoryObj<typeof LocalNetworkGateways>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

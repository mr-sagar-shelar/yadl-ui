import type { Meta, StoryObj } from "@storybook/react";
import NetworkFirewall from "../NetworkFirewall";

const meta: Meta<typeof NetworkFirewall> = { title: "AWS/SecurityIdentityCompliance/NetworkFirewall", component: NetworkFirewall };

export default meta;
type Story = StoryObj<typeof NetworkFirewall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

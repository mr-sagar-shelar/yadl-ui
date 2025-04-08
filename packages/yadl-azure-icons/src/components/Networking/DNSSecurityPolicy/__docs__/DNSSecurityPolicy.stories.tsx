import type { Meta, StoryObj } from "@storybook/react";
import DNSSecurityPolicy from "../DNSSecurityPolicy";

const meta: Meta<typeof DNSSecurityPolicy> = { title: "Azure/Networking/DNSSecurityPolicy", component: DNSSecurityPolicy };

export default meta;
type Story = StoryObj<typeof DNSSecurityPolicy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DNSPrivateResolver from "../DNSPrivateResolver";

const meta: Meta<typeof DNSPrivateResolver> = { title: "Azure/Networking/DNSPrivateResolver", component: DNSPrivateResolver };

export default meta;
type Story = StoryObj<typeof DNSPrivateResolver>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

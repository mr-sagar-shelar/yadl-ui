import type { Meta, StoryObj } from "@storybook/react";
import DNSMultistack from "../DNSMultistack";

const meta: Meta<typeof DNSMultistack> = { title: "Azure/Networking/DNSMultistack", component: DNSMultistack };

export default meta;
type Story = StoryObj<typeof DNSMultistack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

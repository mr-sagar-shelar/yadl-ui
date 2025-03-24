import type { Meta, StoryObj } from "@storybook/react";
import DNSZones from "../DNSZones";

const meta: Meta<typeof DNSZones> = { title: "Azure/Networking/DNSZones", component: DNSZones };

export default meta;
type Story = StoryObj<typeof DNSZones>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import OutboundConnection from "../OutboundConnection";

const meta: Meta<typeof OutboundConnection> = { title: "Azure/Blockchain/OutboundConnection", component: OutboundConnection };

export default meta;
type Story = StoryObj<typeof OutboundConnection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

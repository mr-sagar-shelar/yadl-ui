import type { Meta, StoryObj } from "@storybook/react";
import ApplicationGateways from "../ApplicationGateways";

const meta: Meta<typeof ApplicationGateways> = { title: "Azure/Networking/ApplicationGateways", component: ApplicationGateways };

export default meta;
type Story = StoryObj<typeof ApplicationGateways>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ApplicationGatewayContainers from "../ApplicationGatewayContainers";

const meta: Meta<typeof ApplicationGatewayContainers> = { title: "Azure/Networking/ApplicationGatewayContainers", component: ApplicationGatewayContainers };

export default meta;
type Story = StoryObj<typeof ApplicationGatewayContainers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

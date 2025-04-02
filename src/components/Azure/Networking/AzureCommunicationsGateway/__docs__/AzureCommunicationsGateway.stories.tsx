import type { Meta, StoryObj } from "@storybook/react";
import AzureCommunicationsGateway from "../AzureCommunicationsGateway";

const meta: Meta<typeof AzureCommunicationsGateway> = { title: "Azure/Networking/AzureCommunicationsGateway", component: AzureCommunicationsGateway };

export default meta;
type Story = StoryObj<typeof AzureCommunicationsGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

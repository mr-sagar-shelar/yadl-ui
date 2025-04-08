import type { Meta, StoryObj } from "@storybook/react";
import TransitGateway from "../TransitGateway";

const meta: Meta<typeof TransitGateway> = { title: "AWS/NetworkingContentDelivery/TransitGateway", component: TransitGateway };

export default meta;
type Story = StoryObj<typeof TransitGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

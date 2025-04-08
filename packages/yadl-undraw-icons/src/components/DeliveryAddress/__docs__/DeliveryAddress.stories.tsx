import type { Meta, StoryObj } from "@storybook/react";
import DeliveryAddress from "../DeliveryAddress";

const meta: Meta<typeof DeliveryAddress> = { title: "unDraw/DeliveryAddress", component: DeliveryAddress };

export default meta;
type Story = StoryObj<typeof DeliveryAddress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

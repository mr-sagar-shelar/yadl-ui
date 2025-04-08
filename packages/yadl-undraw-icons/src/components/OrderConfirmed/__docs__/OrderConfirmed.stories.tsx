import type { Meta, StoryObj } from "@storybook/react";
import OrderConfirmed from "../OrderConfirmed";

const meta: Meta<typeof OrderConfirmed> = { title: "unDraw/OrderConfirmed", component: OrderConfirmed };

export default meta;
type Story = StoryObj<typeof OrderConfirmed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

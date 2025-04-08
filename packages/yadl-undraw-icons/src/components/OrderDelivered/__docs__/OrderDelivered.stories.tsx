import type { Meta, StoryObj } from "@storybook/react";
import OrderDelivered from "../OrderDelivered";

const meta: Meta<typeof OrderDelivered> = { title: "unDraw/OrderDelivered", component: OrderDelivered };

export default meta;
type Story = StoryObj<typeof OrderDelivered>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

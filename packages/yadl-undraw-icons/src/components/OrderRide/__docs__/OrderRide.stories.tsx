import type { Meta, StoryObj } from "@storybook/react";
import OrderRide from "../OrderRide";

const meta: Meta<typeof OrderRide> = { title: "unDraw/OrderRide", component: OrderRide };

export default meta;
type Story = StoryObj<typeof OrderRide>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

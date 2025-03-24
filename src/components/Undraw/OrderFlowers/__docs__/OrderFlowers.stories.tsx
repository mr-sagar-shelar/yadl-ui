import type { Meta, StoryObj } from "@storybook/react";
import OrderFlowers from "../OrderFlowers";

const meta: Meta<typeof OrderFlowers> = { title: "unDraw/OrderFlowers", component: OrderFlowers };

export default meta;
type Story = StoryObj<typeof OrderFlowers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

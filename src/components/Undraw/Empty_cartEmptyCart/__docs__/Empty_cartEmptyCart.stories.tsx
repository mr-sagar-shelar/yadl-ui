import type { Meta, StoryObj } from "@storybook/react";
import Empty_cartEmptyCart from "../Empty_cartEmptyCart";

const meta: Meta<typeof Empty_cartEmptyCart> = { title: "unDraw/Empty_cartEmptyCart", component: Empty_cartEmptyCart };

export default meta;
type Story = StoryObj<typeof Empty_cartEmptyCart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

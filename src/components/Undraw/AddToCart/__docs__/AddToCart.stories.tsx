import type { Meta, StoryObj } from "@storybook/react";
import AddToCart from "../AddToCart";

const meta: Meta<typeof AddToCart> = { title: "unDraw/AddToCart", component: AddToCart };

export default meta;
type Story = StoryObj<typeof AddToCart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

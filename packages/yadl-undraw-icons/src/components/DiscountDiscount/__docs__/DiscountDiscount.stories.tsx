import type { Meta, StoryObj } from "@storybook/react";
import DiscountDiscount from "../DiscountDiscount";

const meta: Meta<typeof DiscountDiscount> = { title: "unDraw/DiscountDiscount", component: DiscountDiscount };

export default meta;
type Story = StoryObj<typeof DiscountDiscount>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

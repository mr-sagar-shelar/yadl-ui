import type { Meta, StoryObj } from "@storybook/react";
import ShoppingBags from "../ShoppingBags";

const meta: Meta<typeof ShoppingBags> = { title: "unDraw/ShoppingBags", component: ShoppingBags };

export default meta;
type Story = StoryObj<typeof ShoppingBags>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

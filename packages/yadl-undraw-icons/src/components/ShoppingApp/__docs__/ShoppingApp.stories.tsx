import type { Meta, StoryObj } from "@storybook/react";
import ShoppingApp from "../ShoppingApp";

const meta: Meta<typeof ShoppingApp> = { title: "unDraw/ShoppingApp", component: ShoppingApp };

export default meta;
type Story = StoryObj<typeof ShoppingApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

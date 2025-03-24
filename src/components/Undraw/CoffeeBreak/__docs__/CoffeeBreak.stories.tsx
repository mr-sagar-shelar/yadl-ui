import type { Meta, StoryObj } from "@storybook/react";
import CoffeeBreak from "../CoffeeBreak";

const meta: Meta<typeof CoffeeBreak> = { title: "unDraw/CoffeeBreak", component: CoffeeBreak };

export default meta;
type Story = StoryObj<typeof CoffeeBreak>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DrinkCoffee from "../DrinkCoffee";

const meta: Meta<typeof DrinkCoffee> = { title: "unDraw/DrinkCoffee", component: DrinkCoffee };

export default meta;
type Story = StoryObj<typeof DrinkCoffee>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

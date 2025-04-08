import type { Meta, StoryObj } from "@storybook/react";
import GettingCoffee from "../GettingCoffee";

const meta: Meta<typeof GettingCoffee> = { title: "unDraw/GettingCoffee", component: GettingCoffee };

export default meta;
type Story = StoryObj<typeof GettingCoffee>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

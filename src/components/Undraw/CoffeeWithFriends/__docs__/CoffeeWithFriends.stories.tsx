import type { Meta, StoryObj } from "@storybook/react";
import CoffeeWithFriends from "../CoffeeWithFriends";

const meta: Meta<typeof CoffeeWithFriends> = { title: "unDraw/CoffeeWithFriends", component: CoffeeWithFriends };

export default meta;
type Story = StoryObj<typeof CoffeeWithFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

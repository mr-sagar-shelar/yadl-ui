import type { Meta, StoryObj } from "@storybook/react";
import WindowShopping from "../WindowShopping";

const meta: Meta<typeof WindowShopping> = { title: "unDraw/WindowShopping", component: WindowShopping };

export default meta;
type Story = StoryObj<typeof WindowShopping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

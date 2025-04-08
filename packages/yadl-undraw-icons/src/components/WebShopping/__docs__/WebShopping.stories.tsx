import type { Meta, StoryObj } from "@storybook/react";
import WebShopping from "../WebShopping";

const meta: Meta<typeof WebShopping> = { title: "unDraw/WebShopping", component: WebShopping };

export default meta;
type Story = StoryObj<typeof WebShopping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

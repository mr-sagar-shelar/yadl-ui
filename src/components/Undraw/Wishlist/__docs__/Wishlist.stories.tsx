import type { Meta, StoryObj } from "@storybook/react";
import Wishlist from "../Wishlist";

const meta: Meta<typeof Wishlist> = { title: "unDraw/Wishlist", component: Wishlist };

export default meta;
type Story = StoryObj<typeof Wishlist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

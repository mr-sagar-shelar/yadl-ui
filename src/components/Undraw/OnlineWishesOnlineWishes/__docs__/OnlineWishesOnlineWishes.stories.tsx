import type { Meta, StoryObj } from "@storybook/react";
import OnlineWishesOnlineWishes from "../OnlineWishesOnlineWishes";

const meta: Meta<typeof OnlineWishesOnlineWishes> = { title: "unDraw/OnlineWishesOnlineWishes", component: OnlineWishesOnlineWishes };

export default meta;
type Story = StoryObj<typeof OnlineWishesOnlineWishes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

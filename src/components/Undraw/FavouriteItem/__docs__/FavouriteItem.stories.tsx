import type { Meta, StoryObj } from "@storybook/react";
import FavouriteItem from "../FavouriteItem";

const meta: Meta<typeof FavouriteItem> = { title: "unDraw/FavouriteItem", component: FavouriteItem };

export default meta;
type Story = StoryObj<typeof FavouriteItem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

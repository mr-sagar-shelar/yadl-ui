import type { Meta, StoryObj } from "@storybook/react";
import FavoritePost from "../FavoritePost";

const meta: Meta<typeof FavoritePost> = { title: "unDraw/FavoritePost", component: FavoritePost };

export default meta;
type Story = StoryObj<typeof FavoritePost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

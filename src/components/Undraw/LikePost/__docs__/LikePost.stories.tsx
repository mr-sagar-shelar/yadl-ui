import type { Meta, StoryObj } from "@storybook/react";
import LikePost from "../LikePost";

const meta: Meta<typeof LikePost> = { title: "unDraw/LikePost", component: LikePost };

export default meta;
type Story = StoryObj<typeof LikePost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

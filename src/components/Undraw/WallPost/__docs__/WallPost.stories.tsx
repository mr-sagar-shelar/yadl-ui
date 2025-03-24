import type { Meta, StoryObj } from "@storybook/react";
import WallPost from "../WallPost";

const meta: Meta<typeof WallPost> = { title: "unDraw/WallPost", component: WallPost };

export default meta;
type Story = StoryObj<typeof WallPost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

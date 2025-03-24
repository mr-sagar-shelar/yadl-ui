import type { Meta, StoryObj } from "@storybook/react";
import ImagePost from "../ImagePost";

const meta: Meta<typeof ImagePost> = { title: "unDraw/ImagePost", component: ImagePost };

export default meta;
type Story = StoryObj<typeof ImagePost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

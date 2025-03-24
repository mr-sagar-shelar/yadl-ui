import type { Meta, StoryObj } from "@storybook/react";
import PostingPhoto from "../PostingPhoto";

const meta: Meta<typeof PostingPhoto> = { title: "unDraw/PostingPhoto", component: PostingPhoto };

export default meta;
type Story = StoryObj<typeof PostingPhoto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

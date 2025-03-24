import type { Meta, StoryObj } from "@storybook/react";
import PhotoAlbum from "../PhotoAlbum";

const meta: Meta<typeof PhotoAlbum> = { title: "unDraw/PhotoAlbum", component: PhotoAlbum };

export default meta;
type Story = StoryObj<typeof PhotoAlbum>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Bookmarks from "../Bookmarks";

const meta: Meta<typeof Bookmarks> = { title: "unDraw/Bookmarks", component: Bookmarks };

export default meta;
type Story = StoryObj<typeof Bookmarks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

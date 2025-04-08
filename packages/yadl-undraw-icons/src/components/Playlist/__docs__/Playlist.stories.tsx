import type { Meta, StoryObj } from "@storybook/react";
import Playlist from "../Playlist";

const meta: Meta<typeof Playlist> = { title: "unDraw/Playlist", component: Playlist };

export default meta;
type Story = StoryObj<typeof Playlist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

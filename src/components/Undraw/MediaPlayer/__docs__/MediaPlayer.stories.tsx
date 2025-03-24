import type { Meta, StoryObj } from "@storybook/react";
import MediaPlayer from "../MediaPlayer";

const meta: Meta<typeof MediaPlayer> = { title: "unDraw/MediaPlayer", component: MediaPlayer };

export default meta;
type Story = StoryObj<typeof MediaPlayer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

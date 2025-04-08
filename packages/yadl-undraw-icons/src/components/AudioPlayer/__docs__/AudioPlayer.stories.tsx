import type { Meta, StoryObj } from "@storybook/react";
import AudioPlayer from "../AudioPlayer";

const meta: Meta<typeof AudioPlayer> = { title: "unDraw/AudioPlayer", component: AudioPlayer };

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

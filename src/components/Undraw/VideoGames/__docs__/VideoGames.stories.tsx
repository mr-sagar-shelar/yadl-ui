import type { Meta, StoryObj } from "@storybook/react";
import VideoGames from "../VideoGames";

const meta: Meta<typeof VideoGames> = { title: "unDraw/VideoGames", component: VideoGames };

export default meta;
type Story = StoryObj<typeof VideoGames>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

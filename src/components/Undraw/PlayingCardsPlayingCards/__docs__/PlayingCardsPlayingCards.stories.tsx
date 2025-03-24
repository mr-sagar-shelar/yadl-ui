import type { Meta, StoryObj } from "@storybook/react";
import PlayingCardsPlayingCards from "../PlayingCardsPlayingCards";

const meta: Meta<typeof PlayingCardsPlayingCards> = { title: "unDraw/PlayingCardsPlayingCards", component: PlayingCardsPlayingCards };

export default meta;
type Story = StoryObj<typeof PlayingCardsPlayingCards>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

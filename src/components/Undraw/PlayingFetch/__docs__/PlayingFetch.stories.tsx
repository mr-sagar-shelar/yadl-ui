import type { Meta, StoryObj } from "@storybook/react";
import PlayingFetch from "../PlayingFetch";

const meta: Meta<typeof PlayingFetch> = { title: "unDraw/PlayingFetch", component: PlayingFetch };

export default meta;
type Story = StoryObj<typeof PlayingFetch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Tweetstorm from "../Tweetstorm";

const meta: Meta<typeof Tweetstorm> = { title: "unDraw/Tweetstorm", component: Tweetstorm };

export default meta;
type Story = StoryObj<typeof Tweetstorm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

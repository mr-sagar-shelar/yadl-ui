import type { Meta, StoryObj } from "@storybook/react";
import PodcastListener from "../PodcastListener";

const meta: Meta<typeof PodcastListener> = { title: "unDraw/PodcastListener", component: PodcastListener };

export default meta;
type Story = StoryObj<typeof PodcastListener>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

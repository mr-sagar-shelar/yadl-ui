import type { Meta, StoryObj } from "@storybook/react";
import PodcastAudience from "../PodcastAudience";

const meta: Meta<typeof PodcastAudience> = { title: "unDraw/PodcastAudience", component: PodcastAudience };

export default meta;
type Story = StoryObj<typeof PodcastAudience>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

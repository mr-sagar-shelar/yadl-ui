import type { Meta, StoryObj } from "@storybook/react";
import VideoInfluencer from "../VideoInfluencer";

const meta: Meta<typeof VideoInfluencer> = { title: "unDraw/VideoInfluencer", component: VideoInfluencer };

export default meta;
type Story = StoryObj<typeof VideoInfluencer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

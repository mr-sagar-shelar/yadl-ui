import type { Meta, StoryObj } from "@storybook/react";
import VideoTutorial from "../VideoTutorial";

const meta: Meta<typeof VideoTutorial> = { title: "unDraw/VideoTutorial", component: VideoTutorial };

export default meta;
type Story = StoryObj<typeof VideoTutorial>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

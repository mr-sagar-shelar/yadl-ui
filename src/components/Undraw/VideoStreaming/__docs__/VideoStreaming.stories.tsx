import type { Meta, StoryObj } from "@storybook/react";
import VideoStreaming from "../VideoStreaming";

const meta: Meta<typeof VideoStreaming> = { title: "unDraw/VideoStreaming", component: VideoStreaming };

export default meta;
type Story = StoryObj<typeof VideoStreaming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

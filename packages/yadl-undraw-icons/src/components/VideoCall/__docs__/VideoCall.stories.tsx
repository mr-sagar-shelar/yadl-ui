import type { Meta, StoryObj } from "@storybook/react";
import VideoCall from "../VideoCall";

const meta: Meta<typeof VideoCall> = { title: "unDraw/VideoCall", component: VideoCall };

export default meta;
type Story = StoryObj<typeof VideoCall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import VideoUpload from "../VideoUpload";

const meta: Meta<typeof VideoUpload> = { title: "unDraw/VideoUpload", component: VideoUpload };

export default meta;
type Story = StoryObj<typeof VideoUpload>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

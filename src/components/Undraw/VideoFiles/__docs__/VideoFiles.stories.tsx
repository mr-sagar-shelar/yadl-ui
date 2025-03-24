import type { Meta, StoryObj } from "@storybook/react";
import VideoFiles from "../VideoFiles";

const meta: Meta<typeof VideoFiles> = { title: "unDraw/VideoFiles", component: VideoFiles };

export default meta;
type Story = StoryObj<typeof VideoFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

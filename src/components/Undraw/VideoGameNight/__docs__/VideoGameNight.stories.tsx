import type { Meta, StoryObj } from "@storybook/react";
import VideoGameNight from "../VideoGameNight";

const meta: Meta<typeof VideoGameNight> = { title: "unDraw/VideoGameNight", component: VideoGameNight };

export default meta;
type Story = StoryObj<typeof VideoGameNight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

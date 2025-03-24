import type { Meta, StoryObj } from "@storybook/react";
import RemoteMeeting from "../RemoteMeeting";

const meta: Meta<typeof RemoteMeeting> = { title: "unDraw/RemoteMeeting", component: RemoteMeeting };

export default meta;
type Story = StoryObj<typeof RemoteMeeting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

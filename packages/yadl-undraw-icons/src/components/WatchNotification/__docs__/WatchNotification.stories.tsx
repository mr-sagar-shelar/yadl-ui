import type { Meta, StoryObj } from "@storybook/react";
import WatchNotification from "../WatchNotification";

const meta: Meta<typeof WatchNotification> = { title: "unDraw/WatchNotification", component: WatchNotification };

export default meta;
type Story = StoryObj<typeof WatchNotification>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

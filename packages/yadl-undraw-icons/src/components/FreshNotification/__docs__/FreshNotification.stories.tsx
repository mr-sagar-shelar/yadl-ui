import type { Meta, StoryObj } from "@storybook/react";
import FreshNotification from "../FreshNotification";

const meta: Meta<typeof FreshNotification> = { title: "unDraw/FreshNotification", component: FreshNotification };

export default meta;
type Story = StoryObj<typeof FreshNotification>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

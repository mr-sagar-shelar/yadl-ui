import type { Meta, StoryObj } from "@storybook/react";
import PushNotifications from "../PushNotifications";

const meta: Meta<typeof PushNotifications> = { title: "unDraw/PushNotifications", component: PushNotifications };

export default meta;
type Story = StoryObj<typeof PushNotifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

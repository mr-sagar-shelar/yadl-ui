import type { Meta, StoryObj } from "@storybook/react";
import Notifications from "../Notifications";

const meta: Meta<typeof Notifications> = { title: "unDraw/Notifications", component: Notifications };

export default meta;
type Story = StoryObj<typeof Notifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

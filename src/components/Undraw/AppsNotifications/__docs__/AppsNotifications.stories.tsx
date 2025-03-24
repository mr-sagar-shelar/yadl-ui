import type { Meta, StoryObj } from "@storybook/react";
import AppsNotifications from "../AppsNotifications";

const meta: Meta<typeof AppsNotifications> = { title: "unDraw/AppsNotifications", component: AppsNotifications };

export default meta;
type Story = StoryObj<typeof AppsNotifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

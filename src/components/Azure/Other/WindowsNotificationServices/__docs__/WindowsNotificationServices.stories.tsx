import type { Meta, StoryObj } from "@storybook/react";
import WindowsNotificationServices from "../WindowsNotificationServices";

const meta: Meta<typeof WindowsNotificationServices> = { title: "Azure/Other/WindowsNotificationServices", component: WindowsNotificationServices };

export default meta;
type Story = StoryObj<typeof WindowsNotificationServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

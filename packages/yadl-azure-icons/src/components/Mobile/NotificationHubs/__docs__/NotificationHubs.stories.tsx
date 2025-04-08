import type { Meta, StoryObj } from "@storybook/react";
import NotificationHubs from "../NotificationHubs";

const meta: Meta<typeof NotificationHubs> = { title: "Azure/Mobile/NotificationHubs", component: NotificationHubs };

export default meta;
type Story = StoryObj<typeof NotificationHubs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

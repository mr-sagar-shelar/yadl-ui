import type { Meta, StoryObj } from "@storybook/react";
import NotificationHubNamespaces from "../NotificationHubNamespaces";

const meta: Meta<typeof NotificationHubNamespaces> = { title: "Azure/Web/NotificationHubNamespaces", component: NotificationHubNamespaces };

export default meta;
type Story = StoryObj<typeof NotificationHubNamespaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

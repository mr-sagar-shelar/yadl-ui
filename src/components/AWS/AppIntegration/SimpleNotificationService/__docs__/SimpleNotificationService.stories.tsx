import type { Meta, StoryObj } from "@storybook/react";
import SimpleNotificationService from "../SimpleNotificationService";

const meta: Meta<typeof SimpleNotificationService> = { title: "AWS/AppIntegration/SimpleNotificationService", component: SimpleNotificationService };

export default meta;
type Story = StoryObj<typeof SimpleNotificationService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

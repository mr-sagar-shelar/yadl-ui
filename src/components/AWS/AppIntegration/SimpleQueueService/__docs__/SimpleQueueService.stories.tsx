import type { Meta, StoryObj } from "@storybook/react";
import SimpleQueueService from "../SimpleQueueService";

const meta: Meta<typeof SimpleQueueService> = { title: "AWS/AppIntegration/SimpleQueueService", component: SimpleQueueService };

export default meta;
type Story = StoryObj<typeof SimpleQueueService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

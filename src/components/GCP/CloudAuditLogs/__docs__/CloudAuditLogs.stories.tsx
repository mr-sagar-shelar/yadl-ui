import type { Meta, StoryObj } from "@storybook/react";
import CloudAuditLogs from "../CloudAuditLogs";

const meta: Meta<typeof CloudAuditLogs> = { title: "GCP/CloudAuditLogs", component: CloudAuditLogs };

export default meta;
type Story = StoryObj<typeof CloudAuditLogs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

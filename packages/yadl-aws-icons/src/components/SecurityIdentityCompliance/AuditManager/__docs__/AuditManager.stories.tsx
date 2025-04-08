import type { Meta, StoryObj } from "@storybook/react";
import AuditManager from "../AuditManager";

const meta: Meta<typeof AuditManager> = { title: "AWS/SecurityIdentityCompliance/AuditManager", component: AuditManager };

export default meta;
type Story = StoryObj<typeof AuditManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

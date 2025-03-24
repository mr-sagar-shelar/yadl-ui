import type { Meta, StoryObj } from "@storybook/react";
import ActivityLog from "../ActivityLog";

const meta: Meta<typeof ActivityLog> = { title: "Azure/ManagementGovernance/ActivityLog", component: ActivityLog };

export default meta;
type Story = StoryObj<typeof ActivityLog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

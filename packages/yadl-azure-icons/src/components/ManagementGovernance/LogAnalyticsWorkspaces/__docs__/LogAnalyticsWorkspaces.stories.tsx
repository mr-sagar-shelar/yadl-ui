import type { Meta, StoryObj } from "@storybook/react";
import LogAnalyticsWorkspaces from "../LogAnalyticsWorkspaces";

const meta: Meta<typeof LogAnalyticsWorkspaces> = { title: "Azure/ManagementGovernance/LogAnalyticsWorkspaces", component: LogAnalyticsWorkspaces };

export default meta;
type Story = StoryObj<typeof LogAnalyticsWorkspaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

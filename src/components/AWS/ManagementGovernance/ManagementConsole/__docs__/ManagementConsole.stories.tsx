import type { Meta, StoryObj } from "@storybook/react";
import ManagementConsole from "../ManagementConsole";

const meta: Meta<typeof ManagementConsole> = { title: "AWS/ManagementGovernance/ManagementConsole", component: ManagementConsole };

export default meta;
type Story = StoryObj<typeof ManagementConsole>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ManagedApplicationsCenter from "../ManagedApplicationsCenter";

const meta: Meta<typeof ManagedApplicationsCenter> = { title: "Azure/ManagementGovernance/ManagedApplicationsCenter", component: ManagedApplicationsCenter };

export default meta;
type Story = StoryObj<typeof ManagedApplicationsCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

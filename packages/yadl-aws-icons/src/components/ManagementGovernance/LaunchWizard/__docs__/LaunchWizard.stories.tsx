import type { Meta, StoryObj } from "@storybook/react";
import LaunchWizard from "../LaunchWizard";

const meta: Meta<typeof LaunchWizard> = { title: "AWS/ManagementGovernance/LaunchWizard", component: LaunchWizard };

export default meta;
type Story = StoryObj<typeof LaunchWizard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

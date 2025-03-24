import type { Meta, StoryObj } from "@storybook/react";
import SystemsManager from "../SystemsManager";

const meta: Meta<typeof SystemsManager> = { title: "AWS/ManagementGovernance/SystemsManager", component: SystemsManager };

export default meta;
type Story = StoryObj<typeof SystemsManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

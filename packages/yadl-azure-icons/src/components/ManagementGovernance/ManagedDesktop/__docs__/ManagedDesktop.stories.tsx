import type { Meta, StoryObj } from "@storybook/react";
import ManagedDesktop from "../ManagedDesktop";

const meta: Meta<typeof ManagedDesktop> = { title: "Azure/ManagementGovernance/ManagedDesktop", component: ManagedDesktop };

export default meta;
type Story = StoryObj<typeof ManagedDesktop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

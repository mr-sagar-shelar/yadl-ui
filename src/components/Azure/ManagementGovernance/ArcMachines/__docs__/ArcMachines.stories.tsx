import type { Meta, StoryObj } from "@storybook/react";
import ArcMachines from "../ArcMachines";

const meta: Meta<typeof ArcMachines> = { title: "Azure/ManagementGovernance/ArcMachines", component: ArcMachines };

export default meta;
type Story = StoryObj<typeof ArcMachines>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

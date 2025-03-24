import type { Meta, StoryObj } from "@storybook/react";
import FaultInjectionSimulator from "../FaultInjectionSimulator";

const meta: Meta<typeof FaultInjectionSimulator> = { title: "AWS/ManagementGovernance/FaultInjectionSimulator", component: FaultInjectionSimulator };

export default meta;
type Story = StoryObj<typeof FaultInjectionSimulator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

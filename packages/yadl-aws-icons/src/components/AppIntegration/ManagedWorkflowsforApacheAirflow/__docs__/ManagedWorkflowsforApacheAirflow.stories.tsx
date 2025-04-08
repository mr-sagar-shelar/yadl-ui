import type { Meta, StoryObj } from "@storybook/react";
import ManagedWorkflowsforApacheAirflow from "../ManagedWorkflowsforApacheAirflow";

const meta: Meta<typeof ManagedWorkflowsforApacheAirflow> = { title: "AWS/AppIntegration/ManagedWorkflowsforApacheAirflow", component: ManagedWorkflowsforApacheAirflow };

export default meta;
type Story = StoryObj<typeof ManagedWorkflowsforApacheAirflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

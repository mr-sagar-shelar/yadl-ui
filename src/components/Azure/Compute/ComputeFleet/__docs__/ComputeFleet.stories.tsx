import type { Meta, StoryObj } from "@storybook/react";
import ComputeFleet from "../ComputeFleet";

const meta: Meta<typeof ComputeFleet> = { title: "Azure/Compute/ComputeFleet", component: ComputeFleet };

export default meta;
type Story = StoryObj<typeof ComputeFleet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import IntuneTrends from "../IntuneTrends";

const meta: Meta<typeof IntuneTrends> = { title: "Azure/ManagementGovernance/IntuneTrends", component: IntuneTrends };

export default meta;
type Story = StoryObj<typeof IntuneTrends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

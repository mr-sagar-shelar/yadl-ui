import type { Meta, StoryObj } from "@storybook/react";
import CostAlerts from "../CostAlerts";

const meta: Meta<typeof CostAlerts> = { title: "Azure/General/CostAlerts", component: CostAlerts };

export default meta;
type Story = StoryObj<typeof CostAlerts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

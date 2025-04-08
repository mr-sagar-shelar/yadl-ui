import type { Meta, StoryObj } from "@storybook/react";
import CostBudgets from "../CostBudgets";

const meta: Meta<typeof CostBudgets> = { title: "Azure/General/CostBudgets", component: CostBudgets };

export default meta;
type Story = StoryObj<typeof CostBudgets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

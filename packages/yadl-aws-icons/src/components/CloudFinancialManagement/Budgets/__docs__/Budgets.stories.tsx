import type { Meta, StoryObj } from "@storybook/react";
import Budgets from "../Budgets";

const meta: Meta<typeof Budgets> = { title: "AWS/CloudFinancialManagement/Budgets", component: Budgets };

export default meta;
type Story = StoryObj<typeof Budgets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SavingsPlans from "../SavingsPlans";

const meta: Meta<typeof SavingsPlans> = { title: "Azure/Other/SavingsPlans", component: SavingsPlans };

export default meta;
type Story = StoryObj<typeof SavingsPlans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

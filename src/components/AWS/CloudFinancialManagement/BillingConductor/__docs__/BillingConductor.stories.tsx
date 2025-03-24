import type { Meta, StoryObj } from "@storybook/react";
import BillingConductor from "../BillingConductor";

const meta: Meta<typeof BillingConductor> = { title: "AWS/CloudFinancialManagement/BillingConductor", component: BillingConductor };

export default meta;
type Story = StoryObj<typeof BillingConductor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

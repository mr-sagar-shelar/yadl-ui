import type { Meta, StoryObj } from "@storybook/react";
import CostManagementandBilling from "../CostManagementandBilling";

const meta: Meta<typeof CostManagementandBilling> = { title: "Azure/Migrate/CostManagementandBilling", component: CostManagementandBilling };

export default meta;
type Story = StoryObj<typeof CostManagementandBilling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import FinancialServicesMarketplace from "../FinancialServicesMarketplace";

const meta: Meta<typeof FinancialServicesMarketplace> = { title: "GCP/FinancialServicesMarketplace", component: FinancialServicesMarketplace };

export default meta;
type Story = StoryObj<typeof FinancialServicesMarketplace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

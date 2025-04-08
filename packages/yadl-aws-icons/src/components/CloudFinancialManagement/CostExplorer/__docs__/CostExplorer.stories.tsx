import type { Meta, StoryObj } from "@storybook/react";
import CostExplorer from "../CostExplorer";

const meta: Meta<typeof CostExplorer> = { title: "AWS/CloudFinancialManagement/CostExplorer", component: CostExplorer };

export default meta;
type Story = StoryObj<typeof CostExplorer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

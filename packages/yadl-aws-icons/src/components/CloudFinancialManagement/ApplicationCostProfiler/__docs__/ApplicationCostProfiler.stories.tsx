import type { Meta, StoryObj } from "@storybook/react";
import ApplicationCostProfiler from "../ApplicationCostProfiler";

const meta: Meta<typeof ApplicationCostProfiler> = { title: "AWS/CloudFinancialManagement/ApplicationCostProfiler", component: ApplicationCostProfiler };

export default meta;
type Story = StoryObj<typeof ApplicationCostProfiler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

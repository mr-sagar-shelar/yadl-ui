import type { Meta, StoryObj } from "@storybook/react";
import CostandUsageReport from "../CostandUsageReport";

const meta: Meta<typeof CostandUsageReport> = { title: "AWS/CloudFinancialManagement/CostandUsageReport", component: CostandUsageReport };

export default meta;
type Story = StoryObj<typeof CostandUsageReport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import TimeSeriesInsightsAccessPolicies from "../TimeSeriesInsightsAccessPolicies";

const meta: Meta<typeof TimeSeriesInsightsAccessPolicies> = { title: "Azure/Iot/TimeSeriesInsightsAccessPolicies", component: TimeSeriesInsightsAccessPolicies };

export default meta;
type Story = StoryObj<typeof TimeSeriesInsightsAccessPolicies>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

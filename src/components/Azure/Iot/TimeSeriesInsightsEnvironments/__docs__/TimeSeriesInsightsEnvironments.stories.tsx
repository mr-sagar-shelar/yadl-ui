import type { Meta, StoryObj } from "@storybook/react";
import TimeSeriesInsightsEnvironments from "../TimeSeriesInsightsEnvironments";

const meta: Meta<typeof TimeSeriesInsightsEnvironments> = { title: "Azure/Iot/TimeSeriesInsightsEnvironments", component: TimeSeriesInsightsEnvironments };

export default meta;
type Story = StoryObj<typeof TimeSeriesInsightsEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

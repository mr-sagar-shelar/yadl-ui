import type { Meta, StoryObj } from "@storybook/react";
import TimeSeriesInsightsEventSources from "../TimeSeriesInsightsEventSources";

const meta: Meta<typeof TimeSeriesInsightsEventSources> = { title: "Azure/Iot/TimeSeriesInsightsEventSources", component: TimeSeriesInsightsEventSources };

export default meta;
type Story = StoryObj<typeof TimeSeriesInsightsEventSources>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

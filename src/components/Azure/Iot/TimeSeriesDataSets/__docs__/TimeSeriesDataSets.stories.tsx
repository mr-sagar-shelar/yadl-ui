import type { Meta, StoryObj } from "@storybook/react";
import TimeSeriesDataSets from "../TimeSeriesDataSets";

const meta: Meta<typeof TimeSeriesDataSets> = { title: "Azure/Iot/TimeSeriesDataSets", component: TimeSeriesDataSets };

export default meta;
type Story = StoryObj<typeof TimeSeriesDataSets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

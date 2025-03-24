import type { Meta, StoryObj } from "@storybook/react";
import StatisticChart from "../StatisticChart";

const meta: Meta<typeof StatisticChart> = { title: "unDraw/StatisticChart", component: StatisticChart };

export default meta;
type Story = StoryObj<typeof StatisticChart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

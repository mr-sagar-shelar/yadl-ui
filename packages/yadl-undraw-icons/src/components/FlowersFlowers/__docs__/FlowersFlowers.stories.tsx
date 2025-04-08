import type { Meta, StoryObj } from "@storybook/react";
import FlowersFlowers from "../FlowersFlowers";

const meta: Meta<typeof FlowersFlowers> = { title: "unDraw/FlowersFlowers", component: FlowersFlowers };

export default meta;
type Story = StoryObj<typeof FlowersFlowers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

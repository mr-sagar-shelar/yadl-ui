import type { Meta, StoryObj } from "@storybook/react";
import PerformanceOverview from "../PerformanceOverview";

const meta: Meta<typeof PerformanceOverview> = { title: "unDraw/PerformanceOverview", component: PerformanceOverview };

export default meta;
type Story = StoryObj<typeof PerformanceOverview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SegmentAnalysis from "../SegmentAnalysis";

const meta: Meta<typeof SegmentAnalysis> = { title: "unDraw/SegmentAnalysis", component: SegmentAnalysis };

export default meta;
type Story = StoryObj<typeof SegmentAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

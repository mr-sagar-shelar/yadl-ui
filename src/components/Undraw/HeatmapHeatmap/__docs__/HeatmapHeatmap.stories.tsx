import type { Meta, StoryObj } from "@storybook/react";
import HeatmapHeatmap from "../HeatmapHeatmap";

const meta: Meta<typeof HeatmapHeatmap> = { title: "unDraw/HeatmapHeatmap", component: HeatmapHeatmap };

export default meta;
type Story = StoryObj<typeof HeatmapHeatmap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

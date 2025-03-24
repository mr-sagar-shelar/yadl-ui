import type { Meta, StoryObj } from "@storybook/react";
import GrowthChart from "../GrowthChart";

const meta: Meta<typeof GrowthChart> = { title: "unDraw/GrowthChart", component: GrowthChart };

export default meta;
type Story = StoryObj<typeof GrowthChart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

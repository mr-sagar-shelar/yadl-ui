import type { Meta, StoryObj } from "@storybook/react";
import GrowthAnalytics from "../GrowthAnalytics";

const meta: Meta<typeof GrowthAnalytics> = { title: "unDraw/GrowthAnalytics", component: GrowthAnalytics };

export default meta;
type Story = StoryObj<typeof GrowthAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

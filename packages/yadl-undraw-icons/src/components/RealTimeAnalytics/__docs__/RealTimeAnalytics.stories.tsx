import type { Meta, StoryObj } from "@storybook/react";
import RealTimeAnalytics from "../RealTimeAnalytics";

const meta: Meta<typeof RealTimeAnalytics> = { title: "unDraw/RealTimeAnalytics", component: RealTimeAnalytics };

export default meta;
type Story = StoryObj<typeof RealTimeAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

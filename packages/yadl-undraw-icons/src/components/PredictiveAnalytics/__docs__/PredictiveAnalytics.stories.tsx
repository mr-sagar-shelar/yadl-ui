import type { Meta, StoryObj } from "@storybook/react";
import PredictiveAnalytics from "../PredictiveAnalytics";

const meta: Meta<typeof PredictiveAnalytics> = { title: "unDraw/PredictiveAnalytics", component: PredictiveAnalytics };

export default meta;
type Story = StoryObj<typeof PredictiveAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DetailedAnalysis from "../DetailedAnalysis";

const meta: Meta<typeof DetailedAnalysis> = { title: "unDraw/DetailedAnalysis", component: DetailedAnalysis };

export default meta;
type Story = StoryObj<typeof DetailedAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

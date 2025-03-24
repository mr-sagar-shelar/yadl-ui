import type { Meta, StoryObj } from "@storybook/react";
import AnomalyDetector from "../AnomalyDetector";

const meta: Meta<typeof AnomalyDetector> = { title: "Azure/AiMachineLearning/AnomalyDetector", component: AnomalyDetector };

export default meta;
type Story = StoryObj<typeof AnomalyDetector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import FraudDetector from "../FraudDetector";

const meta: Meta<typeof FraudDetector> = { title: "AWS/MachineLearning/FraudDetector", component: FraudDetector };

export default meta;
type Story = StoryObj<typeof FraudDetector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

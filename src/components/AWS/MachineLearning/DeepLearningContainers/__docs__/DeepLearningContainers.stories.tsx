import type { Meta, StoryObj } from "@storybook/react";
import DeepLearningContainers from "../DeepLearningContainers";

const meta: Meta<typeof DeepLearningContainers> = { title: "AWS/MachineLearning/DeepLearningContainers", component: DeepLearningContainers };

export default meta;
type Story = StoryObj<typeof DeepLearningContainers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

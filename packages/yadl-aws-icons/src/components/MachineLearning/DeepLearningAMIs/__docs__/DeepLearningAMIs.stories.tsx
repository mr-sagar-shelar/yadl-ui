import type { Meta, StoryObj } from "@storybook/react";
import DeepLearningAMIs from "../DeepLearningAMIs";

const meta: Meta<typeof DeepLearningAMIs> = { title: "AWS/MachineLearning/DeepLearningAMIs", component: DeepLearningAMIs };

export default meta;
type Story = StoryObj<typeof DeepLearningAMIs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

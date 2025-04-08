import type { Meta, StoryObj } from "@storybook/react";
import SageMakerGroundTruth from "../SageMakerGroundTruth";

const meta: Meta<typeof SageMakerGroundTruth> = { title: "AWS/MachineLearning/SageMakerGroundTruth", component: SageMakerGroundTruth };

export default meta;
type Story = StoryObj<typeof SageMakerGroundTruth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

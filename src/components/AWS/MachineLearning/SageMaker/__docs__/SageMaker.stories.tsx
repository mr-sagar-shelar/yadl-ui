import type { Meta, StoryObj } from "@storybook/react";
import SageMaker from "../SageMaker";

const meta: Meta<typeof SageMaker> = { title: "AWS/MachineLearning/SageMaker", component: SageMaker };

export default meta;
type Story = StoryObj<typeof SageMaker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

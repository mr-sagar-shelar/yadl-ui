import type { Meta, StoryObj } from "@storybook/react";
import SageMakerStudioLab from "../SageMakerStudioLab";

const meta: Meta<typeof SageMakerStudioLab> = { title: "AWS/MachineLearning/SageMakerStudioLab", component: SageMakerStudioLab };

export default meta;
type Story = StoryObj<typeof SageMakerStudioLab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

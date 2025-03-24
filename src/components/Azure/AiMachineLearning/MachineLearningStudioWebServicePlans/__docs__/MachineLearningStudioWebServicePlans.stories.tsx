import type { Meta, StoryObj } from "@storybook/react";
import MachineLearningStudioWebServicePlans from "../MachineLearningStudioWebServicePlans";

const meta: Meta<typeof MachineLearningStudioWebServicePlans> = { title: "Azure/AiMachineLearning/MachineLearningStudioWebServicePlans", component: MachineLearningStudioWebServicePlans };

export default meta;
type Story = StoryObj<typeof MachineLearningStudioWebServicePlans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

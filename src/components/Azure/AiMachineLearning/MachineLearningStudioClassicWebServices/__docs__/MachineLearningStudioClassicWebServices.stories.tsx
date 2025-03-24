import type { Meta, StoryObj } from "@storybook/react";
import MachineLearningStudioClassicWebServices from "../MachineLearningStudioClassicWebServices";

const meta: Meta<typeof MachineLearningStudioClassicWebServices> = { title: "Azure/AiMachineLearning/MachineLearningStudioClassicWebServices", component: MachineLearningStudioClassicWebServices };

export default meta;
type Story = StoryObj<typeof MachineLearningStudioClassicWebServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

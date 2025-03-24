import type { Meta, StoryObj } from "@storybook/react";
import AzureExperimentationStudio from "../AzureExperimentationStudio";

const meta: Meta<typeof AzureExperimentationStudio> = { title: "Azure/AiMachineLearning/AzureExperimentationStudio", component: AzureExperimentationStudio };

export default meta;
type Story = StoryObj<typeof AzureExperimentationStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

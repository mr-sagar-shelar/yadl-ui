import type { Meta, StoryObj } from "@storybook/react";
import CognitiveServicesDecisions from "../CognitiveServicesDecisions";

const meta: Meta<typeof CognitiveServicesDecisions> = { title: "Azure/AiMachineLearning/CognitiveServicesDecisions", component: CognitiveServicesDecisions };

export default meta;
type Story = StoryObj<typeof CognitiveServicesDecisions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AzureAppliedAIServices from "../AzureAppliedAIServices";

const meta: Meta<typeof AzureAppliedAIServices> = { title: "Azure/AiMachineLearning/AzureAppliedAIServices", component: AzureAppliedAIServices };

export default meta;
type Story = StoryObj<typeof AzureAppliedAIServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

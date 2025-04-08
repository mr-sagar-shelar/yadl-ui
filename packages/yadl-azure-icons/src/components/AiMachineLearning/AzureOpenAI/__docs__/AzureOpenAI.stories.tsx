import type { Meta, StoryObj } from "@storybook/react";
import AzureOpenAI from "../AzureOpenAI";

const meta: Meta<typeof AzureOpenAI> = { title: "Azure/AiMachineLearning/AzureOpenAI", component: AzureOpenAI };

export default meta;
type Story = StoryObj<typeof AzureOpenAI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AzureObjectUnderstanding from "../AzureObjectUnderstanding";

const meta: Meta<typeof AzureObjectUnderstanding> = { title: "Azure/AiMachineLearning/AzureObjectUnderstanding", component: AzureObjectUnderstanding };

export default meta;
type Story = StoryObj<typeof AzureObjectUnderstanding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

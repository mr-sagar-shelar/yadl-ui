import type { Meta, StoryObj } from "@storybook/react";
import AIStudio from "../AIStudio";

const meta: Meta<typeof AIStudio> = { title: "Azure/AiMachineLearning/AIStudio", component: AIStudio };

export default meta;
type Story = StoryObj<typeof AIStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

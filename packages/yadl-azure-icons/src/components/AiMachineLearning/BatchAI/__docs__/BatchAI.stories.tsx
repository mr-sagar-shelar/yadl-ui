import type { Meta, StoryObj } from "@storybook/react";
import BatchAI from "../BatchAI";

const meta: Meta<typeof BatchAI> = { title: "Azure/AiMachineLearning/BatchAI", component: BatchAI };

export default meta;
type Story = StoryObj<typeof BatchAI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

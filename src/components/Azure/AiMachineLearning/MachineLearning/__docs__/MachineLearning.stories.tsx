import type { Meta, StoryObj } from "@storybook/react";
import MachineLearning from "../MachineLearning";

const meta: Meta<typeof MachineLearning> = { title: "Azure/AiMachineLearning/MachineLearning", component: MachineLearning };

export default meta;
type Story = StoryObj<typeof MachineLearning>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

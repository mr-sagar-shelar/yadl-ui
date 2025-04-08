import type { Meta, StoryObj } from "@storybook/react";
import ComputerVision from "../ComputerVision";

const meta: Meta<typeof ComputerVision> = { title: "Azure/AiMachineLearning/ComputerVision", component: ComputerVision };

export default meta;
type Story = StoryObj<typeof ComputerVision>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

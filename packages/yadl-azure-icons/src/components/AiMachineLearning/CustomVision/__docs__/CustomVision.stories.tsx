import type { Meta, StoryObj } from "@storybook/react";
import CustomVision from "../CustomVision";

const meta: Meta<typeof CustomVision> = { title: "Azure/AiMachineLearning/CustomVision", component: CustomVision };

export default meta;
type Story = StoryObj<typeof CustomVision>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

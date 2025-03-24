import type { Meta, StoryObj } from "@storybook/react";
import Bonsai from "../Bonsai";

const meta: Meta<typeof Bonsai> = { title: "Azure/AiMachineLearning/Bonsai", component: Bonsai };

export default meta;
type Story = StoryObj<typeof Bonsai>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

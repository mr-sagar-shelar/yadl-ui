import type { Meta, StoryObj } from "@storybook/react";
import Personalizers from "../Personalizers";

const meta: Meta<typeof Personalizers> = { title: "Azure/AiMachineLearning/Personalizers", component: Personalizers };

export default meta;
type Story = StoryObj<typeof Personalizers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

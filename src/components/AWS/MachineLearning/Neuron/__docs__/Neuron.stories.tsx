import type { Meta, StoryObj } from "@storybook/react";
import Neuron from "../Neuron";

const meta: Meta<typeof Neuron> = { title: "AWS/MachineLearning/Neuron", component: Neuron };

export default meta;
type Story = StoryObj<typeof Neuron>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

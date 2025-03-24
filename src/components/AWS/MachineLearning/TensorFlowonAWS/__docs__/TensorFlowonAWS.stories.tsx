import type { Meta, StoryObj } from "@storybook/react";
import TensorFlowonAWS from "../TensorFlowonAWS";

const meta: Meta<typeof TensorFlowonAWS> = { title: "AWS/MachineLearning/TensorFlowonAWS", component: TensorFlowonAWS };

export default meta;
type Story = StoryObj<typeof TensorFlowonAWS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

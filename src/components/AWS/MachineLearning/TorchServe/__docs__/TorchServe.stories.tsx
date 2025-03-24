import type { Meta, StoryObj } from "@storybook/react";
import TorchServe from "../TorchServe";

const meta: Meta<typeof TorchServe> = { title: "AWS/MachineLearning/TorchServe", component: TorchServe };

export default meta;
type Story = StoryObj<typeof TorchServe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

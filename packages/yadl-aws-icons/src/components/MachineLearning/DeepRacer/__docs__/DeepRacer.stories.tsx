import type { Meta, StoryObj } from "@storybook/react";
import DeepRacer from "../DeepRacer";

const meta: Meta<typeof DeepRacer> = { title: "AWS/MachineLearning/DeepRacer", component: DeepRacer };

export default meta;
type Story = StoryObj<typeof DeepRacer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

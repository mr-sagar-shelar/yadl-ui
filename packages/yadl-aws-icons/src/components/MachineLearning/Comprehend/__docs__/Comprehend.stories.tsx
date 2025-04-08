import type { Meta, StoryObj } from "@storybook/react";
import Comprehend from "../Comprehend";

const meta: Meta<typeof Comprehend> = { title: "AWS/MachineLearning/Comprehend", component: Comprehend };

export default meta;
type Story = StoryObj<typeof Comprehend>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

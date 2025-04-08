import type { Meta, StoryObj } from "@storybook/react";
import Polly from "../Polly";

const meta: Meta<typeof Polly> = { title: "AWS/MachineLearning/Polly", component: Polly };

export default meta;
type Story = StoryObj<typeof Polly>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

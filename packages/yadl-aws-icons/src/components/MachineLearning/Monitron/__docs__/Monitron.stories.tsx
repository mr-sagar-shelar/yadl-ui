import type { Meta, StoryObj } from "@storybook/react";
import Monitron from "../Monitron";

const meta: Meta<typeof Monitron> = { title: "AWS/MachineLearning/Monitron", component: Monitron };

export default meta;
type Story = StoryObj<typeof Monitron>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

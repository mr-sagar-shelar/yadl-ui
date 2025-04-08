import type { Meta, StoryObj } from "@storybook/react";
import OnlineLearning from "../OnlineLearning";

const meta: Meta<typeof OnlineLearning> = { title: "unDraw/OnlineLearning", component: OnlineLearning };

export default meta;
type Story = StoryObj<typeof OnlineLearning>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

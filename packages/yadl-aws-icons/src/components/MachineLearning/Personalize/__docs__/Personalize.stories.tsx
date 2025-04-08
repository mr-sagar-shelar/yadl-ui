import type { Meta, StoryObj } from "@storybook/react";
import Personalize from "../Personalize";

const meta: Meta<typeof Personalize> = { title: "AWS/MachineLearning/Personalize", component: Personalize };

export default meta;
type Story = StoryObj<typeof Personalize>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DeepLens from "../DeepLens";

const meta: Meta<typeof DeepLens> = { title: "AWS/MachineLearning/DeepLens", component: DeepLens };

export default meta;
type Story = StoryObj<typeof DeepLens>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

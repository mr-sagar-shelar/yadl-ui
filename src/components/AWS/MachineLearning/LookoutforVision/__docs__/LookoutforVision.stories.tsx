import type { Meta, StoryObj } from "@storybook/react";
import LookoutforVision from "../LookoutforVision";

const meta: Meta<typeof LookoutforVision> = { title: "AWS/MachineLearning/LookoutforVision", component: LookoutforVision };

export default meta;
type Story = StoryObj<typeof LookoutforVision>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

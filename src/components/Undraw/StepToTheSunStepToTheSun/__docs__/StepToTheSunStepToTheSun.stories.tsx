import type { Meta, StoryObj } from "@storybook/react";
import StepToTheSunStepToTheSun from "../StepToTheSunStepToTheSun";

const meta: Meta<typeof StepToTheSunStepToTheSun> = { title: "unDraw/StepToTheSunStepToTheSun", component: StepToTheSunStepToTheSun };

export default meta;
type Story = StoryObj<typeof StepToTheSunStepToTheSun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

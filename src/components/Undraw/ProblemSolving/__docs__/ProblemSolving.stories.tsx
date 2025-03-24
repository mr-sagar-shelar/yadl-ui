import type { Meta, StoryObj } from "@storybook/react";
import ProblemSolving from "../ProblemSolving";

const meta: Meta<typeof ProblemSolving> = { title: "unDraw/ProblemSolving", component: ProblemSolving };

export default meta;
type Story = StoryObj<typeof ProblemSolving>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

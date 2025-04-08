import type { Meta, StoryObj } from "@storybook/react";
import FitnessTrackerFitnessTracker from "../FitnessTrackerFitnessTracker";

const meta: Meta<typeof FitnessTrackerFitnessTracker> = { title: "unDraw/FitnessTrackerFitnessTracker", component: FitnessTrackerFitnessTracker };

export default meta;
type Story = StoryObj<typeof FitnessTrackerFitnessTracker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

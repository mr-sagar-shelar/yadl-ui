import type { Meta, StoryObj } from "@storybook/react";
import WorkoutWorkout from "../WorkoutWorkout";

const meta: Meta<typeof WorkoutWorkout> = { title: "unDraw/WorkoutWorkout", component: WorkoutWorkout };

export default meta;
type Story = StoryObj<typeof WorkoutWorkout>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

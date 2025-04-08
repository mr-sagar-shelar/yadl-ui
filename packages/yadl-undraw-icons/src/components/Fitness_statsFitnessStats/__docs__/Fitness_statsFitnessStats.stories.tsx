import type { Meta, StoryObj } from "@storybook/react";
import Fitness_statsFitnessStats from "../Fitness_statsFitnessStats";

const meta: Meta<typeof Fitness_statsFitnessStats> = { title: "unDraw/Fitness_statsFitnessStats", component: Fitness_statsFitnessStats };

export default meta;
type Story = StoryObj<typeof Fitness_statsFitnessStats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

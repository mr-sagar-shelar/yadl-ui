import type { Meta, StoryObj } from "@storybook/react";
import HealthyHabit from "../HealthyHabit";

const meta: Meta<typeof HealthyHabit> = { title: "unDraw/HealthyHabit", component: HealthyHabit };

export default meta;
type Story = StoryObj<typeof HealthyHabit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

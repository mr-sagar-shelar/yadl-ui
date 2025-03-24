import type { Meta, StoryObj } from "@storybook/react";
import DefenderDistributerControlSystem from "../DefenderDistributerControlSystem";

const meta: Meta<typeof DefenderDistributerControlSystem> = { title: "Azure/Other/DefenderDistributerControlSystem", component: DefenderDistributerControlSystem };

export default meta;
type Story = StoryObj<typeof DefenderDistributerControlSystem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

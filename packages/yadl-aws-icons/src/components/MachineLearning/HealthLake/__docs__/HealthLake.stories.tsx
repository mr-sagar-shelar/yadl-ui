import type { Meta, StoryObj } from "@storybook/react";
import HealthLake from "../HealthLake";

const meta: Meta<typeof HealthLake> = { title: "AWS/MachineLearning/HealthLake", component: HealthLake };

export default meta;
type Story = StoryObj<typeof HealthLake>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

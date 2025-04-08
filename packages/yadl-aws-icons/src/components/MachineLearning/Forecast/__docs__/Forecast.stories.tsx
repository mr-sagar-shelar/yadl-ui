import type { Meta, StoryObj } from "@storybook/react";
import Forecast from "../Forecast";

const meta: Meta<typeof Forecast> = { title: "AWS/MachineLearning/Forecast", component: Forecast };

export default meta;
type Story = StoryObj<typeof Forecast>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

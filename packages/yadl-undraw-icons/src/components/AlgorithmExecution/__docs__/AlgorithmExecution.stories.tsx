import type { Meta, StoryObj } from "@storybook/react";
import AlgorithmExecution from "../AlgorithmExecution";

const meta: Meta<typeof AlgorithmExecution> = { title: "unDraw/AlgorithmExecution", component: AlgorithmExecution };

export default meta;
type Story = StoryObj<typeof AlgorithmExecution>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

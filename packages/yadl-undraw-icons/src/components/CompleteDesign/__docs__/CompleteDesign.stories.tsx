import type { Meta, StoryObj } from "@storybook/react";
import CompleteDesign from "../CompleteDesign";

const meta: Meta<typeof CompleteDesign> = { title: "unDraw/CompleteDesign", component: CompleteDesign };

export default meta;
type Story = StoryObj<typeof CompleteDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

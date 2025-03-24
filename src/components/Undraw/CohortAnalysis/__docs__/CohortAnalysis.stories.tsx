import type { Meta, StoryObj } from "@storybook/react";
import CohortAnalysis from "../CohortAnalysis";

const meta: Meta<typeof CohortAnalysis> = { title: "unDraw/CohortAnalysis", component: CohortAnalysis };

export default meta;
type Story = StoryObj<typeof CohortAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

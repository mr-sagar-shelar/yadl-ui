import type { Meta, StoryObj } from "@storybook/react";
import CostAnalysis from "../CostAnalysis";

const meta: Meta<typeof CostAnalysis> = { title: "Azure/General/CostAnalysis", component: CostAnalysis };

export default meta;
type Story = StoryObj<typeof CostAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

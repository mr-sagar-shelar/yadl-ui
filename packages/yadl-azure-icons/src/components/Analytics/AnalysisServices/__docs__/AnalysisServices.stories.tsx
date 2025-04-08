import type { Meta, StoryObj } from "@storybook/react";
import AnalysisServices from "../AnalysisServices";

const meta: Meta<typeof AnalysisServices> = { title: "Azure/Analytics/AnalysisServices", component: AnalysisServices };

export default meta;
type Story = StoryObj<typeof AnalysisServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

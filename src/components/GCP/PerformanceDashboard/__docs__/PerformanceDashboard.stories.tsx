import type { Meta, StoryObj } from "@storybook/react";
import PerformanceDashboard from "../PerformanceDashboard";

const meta: Meta<typeof PerformanceDashboard> = { title: "GCP/PerformanceDashboard", component: PerformanceDashboard };

export default meta;
type Story = StoryObj<typeof PerformanceDashboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import MetricsAdvisor from "../MetricsAdvisor";

const meta: Meta<typeof MetricsAdvisor> = { title: "Azure/Compute/MetricsAdvisor", component: MetricsAdvisor };

export default meta;
type Story = StoryObj<typeof MetricsAdvisor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

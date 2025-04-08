import type { Meta, StoryObj } from "@storybook/react";
import PolicyAnalyzer from "../PolicyAnalyzer";

const meta: Meta<typeof PolicyAnalyzer> = { title: "GCP/PolicyAnalyzer", component: PolicyAnalyzer };

export default meta;
type Story = StoryObj<typeof PolicyAnalyzer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

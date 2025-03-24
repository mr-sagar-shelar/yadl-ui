import type { Meta, StoryObj } from "@storybook/react";
import RiskManager from "../RiskManager";

const meta: Meta<typeof RiskManager> = { title: "GCP/RiskManager", component: RiskManager };

export default meta;
type Story = StoryObj<typeof RiskManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

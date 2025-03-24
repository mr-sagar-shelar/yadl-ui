import type { Meta, StoryObj } from "@storybook/react";
import NetworkIntelligenceCenter from "../NetworkIntelligenceCenter";

const meta: Meta<typeof NetworkIntelligenceCenter> = { title: "GCP/NetworkIntelligenceCenter", component: NetworkIntelligenceCenter };

export default meta;
type Story = StoryObj<typeof NetworkIntelligenceCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

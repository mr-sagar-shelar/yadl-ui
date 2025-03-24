import type { Meta, StoryObj } from "@storybook/react";
import NetworkTopology from "../NetworkTopology";

const meta: Meta<typeof NetworkTopology> = { title: "GCP/NetworkTopology", component: NetworkTopology };

export default meta;
type Story = StoryObj<typeof NetworkTopology>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ServiceDiscovery from "../ServiceDiscovery";

const meta: Meta<typeof ServiceDiscovery> = { title: "GCP/ServiceDiscovery", component: ServiceDiscovery };

export default meta;
type Story = StoryObj<typeof ServiceDiscovery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

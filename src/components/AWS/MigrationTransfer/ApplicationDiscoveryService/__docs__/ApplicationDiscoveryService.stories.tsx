import type { Meta, StoryObj } from "@storybook/react";
import ApplicationDiscoveryService from "../ApplicationDiscoveryService";

const meta: Meta<typeof ApplicationDiscoveryService> = { title: "AWS/MigrationTransfer/ApplicationDiscoveryService", component: ApplicationDiscoveryService };

export default meta;
type Story = StoryObj<typeof ApplicationDiscoveryService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

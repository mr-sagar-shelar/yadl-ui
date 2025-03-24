import type { Meta, StoryObj } from "@storybook/react";
import MaintenanceConfiguration from "../MaintenanceConfiguration";

const meta: Meta<typeof MaintenanceConfiguration> = { title: "Azure/Compute/MaintenanceConfiguration", component: MaintenanceConfiguration };

export default meta;
type Story = StoryObj<typeof MaintenanceConfiguration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

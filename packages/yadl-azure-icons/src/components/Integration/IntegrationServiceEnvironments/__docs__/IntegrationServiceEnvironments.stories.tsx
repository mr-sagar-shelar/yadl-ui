import type { Meta, StoryObj } from "@storybook/react";
import IntegrationServiceEnvironments from "../IntegrationServiceEnvironments";

const meta: Meta<typeof IntegrationServiceEnvironments> = { title: "Azure/Integration/IntegrationServiceEnvironments", component: IntegrationServiceEnvironments };

export default meta;
type Story = StoryObj<typeof IntegrationServiceEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

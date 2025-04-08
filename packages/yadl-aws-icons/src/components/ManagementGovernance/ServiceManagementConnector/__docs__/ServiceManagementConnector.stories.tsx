import type { Meta, StoryObj } from "@storybook/react";
import ServiceManagementConnector from "../ServiceManagementConnector";

const meta: Meta<typeof ServiceManagementConnector> = { title: "AWS/ManagementGovernance/ServiceManagementConnector", component: ServiceManagementConnector };

export default meta;
type Story = StoryObj<typeof ServiceManagementConnector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

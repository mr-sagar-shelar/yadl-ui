import type { Meta, StoryObj } from "@storybook/react";
import ServiceProviders from "../ServiceProviders";

const meta: Meta<typeof ServiceProviders> = { title: "Azure/ManagementGovernance/ServiceProviders", component: ServiceProviders };

export default meta;
type Story = StoryObj<typeof ServiceProviders>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

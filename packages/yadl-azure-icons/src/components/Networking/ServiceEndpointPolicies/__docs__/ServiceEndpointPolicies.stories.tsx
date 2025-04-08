import type { Meta, StoryObj } from "@storybook/react";
import ServiceEndpointPolicies from "../ServiceEndpointPolicies";

const meta: Meta<typeof ServiceEndpointPolicies> = { title: "Azure/Networking/ServiceEndpointPolicies", component: ServiceEndpointPolicies };

export default meta;
type Story = StoryObj<typeof ServiceEndpointPolicies>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

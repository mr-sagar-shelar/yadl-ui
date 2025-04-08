import type { Meta, StoryObj } from "@storybook/react";
import IntegrationEnvironments from "../IntegrationEnvironments";

const meta: Meta<typeof IntegrationEnvironments> = { title: "Azure/Integration/IntegrationEnvironments", component: IntegrationEnvironments };

export default meta;
type Story = StoryObj<typeof IntegrationEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

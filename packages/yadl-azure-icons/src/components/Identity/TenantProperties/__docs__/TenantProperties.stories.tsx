import type { Meta, StoryObj } from "@storybook/react";
import TenantProperties from "../TenantProperties";

const meta: Meta<typeof TenantProperties> = { title: "Azure/Identity/TenantProperties", component: TenantProperties };

export default meta;
type Story = StoryObj<typeof TenantProperties>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

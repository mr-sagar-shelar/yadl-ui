import type { Meta, StoryObj } from "@storybook/react";
import TenantStatus from "../TenantStatus";

const meta: Meta<typeof TenantStatus> = { title: "Azure/Intune/TenantStatus", component: TenantStatus };

export default meta;
type Story = StoryObj<typeof TenantStatus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

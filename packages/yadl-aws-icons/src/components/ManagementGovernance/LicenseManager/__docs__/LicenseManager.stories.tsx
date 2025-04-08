import type { Meta, StoryObj } from "@storybook/react";
import LicenseManager from "../LicenseManager";

const meta: Meta<typeof LicenseManager> = { title: "AWS/ManagementGovernance/LicenseManager", component: LicenseManager };

export default meta;
type Story = StoryObj<typeof LicenseManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

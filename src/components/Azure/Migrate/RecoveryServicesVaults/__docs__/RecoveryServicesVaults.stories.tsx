import type { Meta, StoryObj } from "@storybook/react";
import RecoveryServicesVaults from "../RecoveryServicesVaults";

const meta: Meta<typeof RecoveryServicesVaults> = { title: "Azure/Migrate/RecoveryServicesVaults", component: RecoveryServicesVaults };

export default meta;
type Story = StoryObj<typeof RecoveryServicesVaults>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

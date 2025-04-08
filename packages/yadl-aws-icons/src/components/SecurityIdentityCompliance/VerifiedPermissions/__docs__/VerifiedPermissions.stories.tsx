import type { Meta, StoryObj } from "@storybook/react";
import VerifiedPermissions from "../VerifiedPermissions";

const meta: Meta<typeof VerifiedPermissions> = { title: "AWS/SecurityIdentityCompliance/VerifiedPermissions", component: VerifiedPermissions };

export default meta;
type Story = StoryObj<typeof VerifiedPermissions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

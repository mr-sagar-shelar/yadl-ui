import type { Meta, StoryObj } from "@storybook/react";
import IdentityandAccessManagement from "../IdentityandAccessManagement";

const meta: Meta<typeof IdentityandAccessManagement> = { title: "AWS/SecurityIdentityCompliance/IdentityandAccessManagement", component: IdentityandAccessManagement };

export default meta;
type Story = StoryObj<typeof IdentityandAccessManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

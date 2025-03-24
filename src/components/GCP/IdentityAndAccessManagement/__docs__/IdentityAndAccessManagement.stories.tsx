import type { Meta, StoryObj } from "@storybook/react";
import IdentityAndAccessManagement from "../IdentityAndAccessManagement";

const meta: Meta<typeof IdentityAndAccessManagement> = { title: "GCP/IdentityAndAccessManagement", component: IdentityAndAccessManagement };

export default meta;
type Story = StoryObj<typeof IdentityAndAccessManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

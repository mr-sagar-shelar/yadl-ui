import type { Meta, StoryObj } from "@storybook/react";
import IdentityGovernance from "../IdentityGovernance";

const meta: Meta<typeof IdentityGovernance> = { title: "Azure/Identity/IdentityGovernance", component: IdentityGovernance };

export default meta;
type Story = StoryObj<typeof IdentityGovernance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

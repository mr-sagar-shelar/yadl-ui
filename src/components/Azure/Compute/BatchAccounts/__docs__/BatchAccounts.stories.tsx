import type { Meta, StoryObj } from "@storybook/react";
import BatchAccounts from "../BatchAccounts";

const meta: Meta<typeof BatchAccounts> = { title: "Azure/Compute/BatchAccounts", component: BatchAccounts };

export default meta;
type Story = StoryObj<typeof BatchAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

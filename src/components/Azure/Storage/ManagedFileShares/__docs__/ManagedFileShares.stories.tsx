import type { Meta, StoryObj } from "@storybook/react";
import ManagedFileShares from "../ManagedFileShares";

const meta: Meta<typeof ManagedFileShares> = { title: "Azure/Storage/ManagedFileShares", component: ManagedFileShares };

export default meta;
type Story = StoryObj<typeof ManagedFileShares>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import NetworkSecurityGroups from "../NetworkSecurityGroups";

const meta: Meta<typeof NetworkSecurityGroups> = { title: "Azure/Networking/NetworkSecurityGroups", component: NetworkSecurityGroups };

export default meta;
type Story = StoryObj<typeof NetworkSecurityGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

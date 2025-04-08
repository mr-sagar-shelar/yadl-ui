import type { Meta, StoryObj } from "@storybook/react";
import SCVMMManagementServers from "../SCVMMManagementServers";

const meta: Meta<typeof SCVMMManagementServers> = { title: "Azure/Other/SCVMMManagementServers", component: SCVMMManagementServers };

export default meta;
type Story = StoryObj<typeof SCVMMManagementServers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

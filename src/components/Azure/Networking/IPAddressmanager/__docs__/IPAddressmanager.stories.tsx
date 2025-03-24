import type { Meta, StoryObj } from "@storybook/react";
import IPAddressmanager from "../IPAddressmanager";

const meta: Meta<typeof IPAddressmanager> = { title: "Azure/Networking/IPAddressmanager", component: IPAddressmanager };

export default meta;
type Story = StoryObj<typeof IPAddressmanager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ResourceManagementPrivateLink from "../ResourceManagementPrivateLink";

const meta: Meta<typeof ResourceManagementPrivateLink> = { title: "Azure/Networking/ResourceManagementPrivateLink", component: ResourceManagementPrivateLink };

export default meta;
type Story = StoryObj<typeof ResourceManagementPrivateLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

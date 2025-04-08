import type { Meta, StoryObj } from "@storybook/react";
import ApplicationSecurityGroups from "../ApplicationSecurityGroups";

const meta: Meta<typeof ApplicationSecurityGroups> = { title: "Azure/Security/ApplicationSecurityGroups", component: ApplicationSecurityGroups };

export default meta;
type Story = StoryObj<typeof ApplicationSecurityGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

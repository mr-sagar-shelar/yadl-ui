import type { Meta, StoryObj } from "@storybook/react";
import ResourceAccessManager from "../ResourceAccessManager";

const meta: Meta<typeof ResourceAccessManager> = { title: "AWS/SecurityIdentityCompliance/ResourceAccessManager", component: ResourceAccessManager };

export default meta;
type Story = StoryObj<typeof ResourceAccessManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

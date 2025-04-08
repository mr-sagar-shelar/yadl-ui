import type { Meta, StoryObj } from "@storybook/react";
import Shield from "../Shield";

const meta: Meta<typeof Shield> = { title: "AWS/SecurityIdentityCompliance/Shield", component: Shield };

export default meta;
type Story = StoryObj<typeof Shield>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

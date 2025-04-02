import type { Meta, StoryObj } from "@storybook/react";
import IAMIdentityCenter from "../IAMIdentityCenter";

const meta: Meta<typeof IAMIdentityCenter> = { title: "AWS/SecurityIdentityCompliance/IAMIdentityCenter", component: IAMIdentityCenter };

export default meta;
type Story = StoryObj<typeof IAMIdentityCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

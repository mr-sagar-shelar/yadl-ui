import type { Meta, StoryObj } from "@storybook/react";
import Signer from "../Signer";

const meta: Meta<typeof Signer> = { title: "AWS/SecurityIdentityCompliance/Signer", component: Signer };

export default meta;
type Story = StoryObj<typeof Signer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

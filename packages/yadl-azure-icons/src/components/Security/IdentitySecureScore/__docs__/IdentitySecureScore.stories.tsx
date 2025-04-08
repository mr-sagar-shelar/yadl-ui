import type { Meta, StoryObj } from "@storybook/react";
import IdentitySecureScore from "../IdentitySecureScore";

const meta: Meta<typeof IdentitySecureScore> = { title: "Azure/Security/IdentitySecureScore", component: IdentitySecureScore };

export default meta;
type Story = StoryObj<typeof IdentitySecureScore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Two_factor_authenticationTwoFactorAuthentication from "../Two_factor_authenticationTwoFactorAuthentication";

const meta: Meta<typeof Two_factor_authenticationTwoFactorAuthentication> = { title: "unDraw/Two_factor_authenticationTwoFactorAuthentication", component: Two_factor_authenticationTwoFactorAuthentication };

export default meta;
type Story = StoryObj<typeof Two_factor_authenticationTwoFactorAuthentication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

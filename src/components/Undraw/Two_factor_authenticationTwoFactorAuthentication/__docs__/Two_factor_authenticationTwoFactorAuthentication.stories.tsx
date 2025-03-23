import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = { title: "unDraw/Two_factor_authenticationTwoFactorAuthentication", component: Example };

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = { args: {} };

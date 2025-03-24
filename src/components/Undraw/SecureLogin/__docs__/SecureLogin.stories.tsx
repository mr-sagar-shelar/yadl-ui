import type { Meta, StoryObj } from "@storybook/react";
import SecureLogin from "../SecureLogin";

const meta: Meta<typeof SecureLogin> = { title: "unDraw/SecureLogin", component: SecureLogin };

export default meta;
type Story = StoryObj<typeof SecureLogin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

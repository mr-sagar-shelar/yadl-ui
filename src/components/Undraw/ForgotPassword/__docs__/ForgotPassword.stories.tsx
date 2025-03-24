import type { Meta, StoryObj } from "@storybook/react";
import ForgotPassword from "../ForgotPassword";

const meta: Meta<typeof ForgotPassword> = { title: "unDraw/ForgotPassword", component: ForgotPassword };

export default meta;
type Story = StoryObj<typeof ForgotPassword>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import MobileLogin from "../MobileLogin";

const meta: Meta<typeof MobileLogin> = { title: "unDraw/MobileLogin", component: MobileLogin };

export default meta;
type Story = StoryObj<typeof MobileLogin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

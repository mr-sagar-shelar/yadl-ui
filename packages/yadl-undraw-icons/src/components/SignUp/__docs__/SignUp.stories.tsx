import type { Meta, StoryObj } from "@storybook/react";
import SignUp from "../SignUp";

const meta: Meta<typeof SignUp> = { title: "unDraw/SignUp", component: SignUp };

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

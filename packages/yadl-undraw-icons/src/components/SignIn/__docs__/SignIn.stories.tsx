import type { Meta, StoryObj } from "@storybook/react";
import SignIn from "../SignIn";

const meta: Meta<typeof SignIn> = { title: "unDraw/SignIn", component: SignIn };

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

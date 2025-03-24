import type { Meta, StoryObj } from "@storybook/react";
import LogIn from "../LogIn";

const meta: Meta<typeof LogIn> = { title: "unDraw/LogIn", component: LogIn };

export default meta;
type Story = StoryObj<typeof LogIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

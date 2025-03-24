import type { Meta, StoryObj } from "@storybook/react";
import LogOut from "../LogOut";

const meta: Meta<typeof LogOut> = { title: "unDraw/LogOut", component: LogOut };

export default meta;
type Story = StoryObj<typeof LogOut>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

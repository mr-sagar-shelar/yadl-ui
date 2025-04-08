import type { Meta, StoryObj } from "@storybook/react";
import HangOut from "../HangOut";

const meta: Meta<typeof HangOut> = { title: "unDraw/HangOut", component: HangOut };

export default meta;
type Story = StoryObj<typeof HangOut>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

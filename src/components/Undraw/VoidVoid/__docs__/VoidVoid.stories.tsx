import type { Meta, StoryObj } from "@storybook/react";
import VoidVoid from "../VoidVoid";

const meta: Meta<typeof VoidVoid> = { title: "unDraw/VoidVoid", component: VoidVoid };

export default meta;
type Story = StoryObj<typeof VoidVoid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

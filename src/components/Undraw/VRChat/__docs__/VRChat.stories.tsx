import type { Meta, StoryObj } from "@storybook/react";
import VRChat from "../VRChat";

const meta: Meta<typeof VRChat> = { title: "unDraw/VRChat", component: VRChat };

export default meta;
type Story = StoryObj<typeof VRChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import MobileUx from "../MobileUx";

const meta: Meta<typeof MobileUx> = { title: "unDraw/MobileUx", component: MobileUx };

export default meta;
type Story = StoryObj<typeof MobileUx>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

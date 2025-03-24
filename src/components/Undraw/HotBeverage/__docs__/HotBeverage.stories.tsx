import type { Meta, StoryObj } from "@storybook/react";
import HotBeverage from "../HotBeverage";

const meta: Meta<typeof HotBeverage> = { title: "unDraw/HotBeverage", component: HotBeverage };

export default meta;
type Story = StoryObj<typeof HotBeverage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

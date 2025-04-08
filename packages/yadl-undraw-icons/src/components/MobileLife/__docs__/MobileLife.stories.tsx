import type { Meta, StoryObj } from "@storybook/react";
import MobileLife from "../MobileLife";

const meta: Meta<typeof MobileLife> = { title: "unDraw/MobileLife", component: MobileLife };

export default meta;
type Story = StoryObj<typeof MobileLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

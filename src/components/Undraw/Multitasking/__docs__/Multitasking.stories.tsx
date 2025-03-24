import type { Meta, StoryObj } from "@storybook/react";
import Multitasking from "../Multitasking";

const meta: Meta<typeof Multitasking> = { title: "unDraw/Multitasking", component: Multitasking };

export default meta;
type Story = StoryObj<typeof Multitasking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

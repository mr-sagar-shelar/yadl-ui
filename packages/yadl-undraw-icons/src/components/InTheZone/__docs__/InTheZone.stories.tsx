import type { Meta, StoryObj } from "@storybook/react";
import InTheZone from "../InTheZone";

const meta: Meta<typeof InTheZone> = { title: "unDraw/InTheZone", component: InTheZone };

export default meta;
type Story = StoryObj<typeof InTheZone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import GravitasGravitas from "../GravitasGravitas";

const meta: Meta<typeof GravitasGravitas> = { title: "unDraw/GravitasGravitas", component: GravitasGravitas };

export default meta;
type Story = StoryObj<typeof GravitasGravitas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

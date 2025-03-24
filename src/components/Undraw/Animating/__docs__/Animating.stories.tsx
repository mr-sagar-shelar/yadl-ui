import type { Meta, StoryObj } from "@storybook/react";
import Animating from "../Animating";

const meta: Meta<typeof Animating> = { title: "unDraw/Animating", component: Animating };

export default meta;
type Story = StoryObj<typeof Animating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

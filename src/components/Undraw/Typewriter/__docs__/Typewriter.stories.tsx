import type { Meta, StoryObj } from "@storybook/react";
import Typewriter from "../Typewriter";

const meta: Meta<typeof Typewriter> = { title: "unDraw/Typewriter", component: Typewriter };

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

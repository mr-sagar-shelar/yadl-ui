import type { Meta, StoryObj } from "@storybook/react";
import LoveIsInTheAir from "../LoveIsInTheAir";

const meta: Meta<typeof LoveIsInTheAir> = { title: "unDraw/LoveIsInTheAir", component: LoveIsInTheAir };

export default meta;
type Story = StoryObj<typeof LoveIsInTheAir>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

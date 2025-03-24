import type { Meta, StoryObj } from "@storybook/react";
import HappyNewYear from "../HappyNewYear";

const meta: Meta<typeof HappyNewYear> = { title: "unDraw/HappyNewYear", component: HappyNewYear };

export default meta;
type Story = StoryObj<typeof HappyNewYear>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Pancakes from "../Pancakes";

const meta: Meta<typeof Pancakes> = { title: "unDraw/Pancakes", component: Pancakes };

export default meta;
type Story = StoryObj<typeof Pancakes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

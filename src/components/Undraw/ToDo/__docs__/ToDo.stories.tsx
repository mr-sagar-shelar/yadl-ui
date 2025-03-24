import type { Meta, StoryObj } from "@storybook/react";
import ToDo from "../ToDo";

const meta: Meta<typeof ToDo> = { title: "unDraw/ToDo", component: ToDo };

export default meta;
type Story = StoryObj<typeof ToDo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

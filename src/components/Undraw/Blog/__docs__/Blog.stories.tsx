import type { Meta, StoryObj } from "@storybook/react";
import Blog from "../Blog";

const meta: Meta<typeof Blog> = { title: "unDraw/Blog", component: Blog };

export default meta;
type Story = StoryObj<typeof Blog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

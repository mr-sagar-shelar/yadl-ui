import type { Meta, StoryObj } from "@storybook/react";
import Posts from "../Posts";

const meta: Meta<typeof Posts> = { title: "unDraw/Posts", component: Posts };

export default meta;
type Story = StoryObj<typeof Posts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

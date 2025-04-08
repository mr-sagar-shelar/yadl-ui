import type { Meta, StoryObj } from "@storybook/react";
import PostOnline from "../PostOnline";

const meta: Meta<typeof PostOnline> = { title: "unDraw/PostOnline", component: PostOnline };

export default meta;
type Story = StoryObj<typeof PostOnline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

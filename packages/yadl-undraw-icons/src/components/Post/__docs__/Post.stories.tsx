import type { Meta, StoryObj } from "@storybook/react";
import Post from "../Post";

const meta: Meta<typeof Post> = { title: "unDraw/Post", component: Post };

export default meta;
type Story = StoryObj<typeof Post>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

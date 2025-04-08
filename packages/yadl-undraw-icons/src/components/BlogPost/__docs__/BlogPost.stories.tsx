import type { Meta, StoryObj } from "@storybook/react";
import BlogPost from "../BlogPost";

const meta: Meta<typeof BlogPost> = { title: "unDraw/BlogPost", component: BlogPost };

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AddPost from "../AddPost";

const meta: Meta<typeof AddPost> = { title: "unDraw/AddPost", component: AddPost };

export default meta;
type Story = StoryObj<typeof AddPost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

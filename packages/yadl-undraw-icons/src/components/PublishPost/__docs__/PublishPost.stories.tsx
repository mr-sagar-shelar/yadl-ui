import type { Meta, StoryObj } from "@storybook/react";
import PublishPost from "../PublishPost";

const meta: Meta<typeof PublishPost> = { title: "unDraw/PublishPost", component: PublishPost };

export default meta;
type Story = StoryObj<typeof PublishPost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

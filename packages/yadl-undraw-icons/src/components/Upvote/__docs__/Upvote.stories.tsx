import type { Meta, StoryObj } from "@storybook/react";
import Upvote from "../Upvote";

const meta: Meta<typeof Upvote> = { title: "unDraw/Upvote", component: Upvote };

export default meta;
type Story = StoryObj<typeof Upvote>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

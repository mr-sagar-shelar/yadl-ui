import type { Meta, StoryObj } from "@storybook/react";
import SocialPost from "../SocialPost";

const meta: Meta<typeof SocialPost> = { title: "unDraw/SocialPost", component: SocialPost };

export default meta;
type Story = StoryObj<typeof SocialPost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

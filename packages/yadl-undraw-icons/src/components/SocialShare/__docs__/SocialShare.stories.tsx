import type { Meta, StoryObj } from "@storybook/react";
import SocialShare from "../SocialShare";

const meta: Meta<typeof SocialShare> = { title: "unDraw/SocialShare", component: SocialShare };

export default meta;
type Story = StoryObj<typeof SocialShare>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

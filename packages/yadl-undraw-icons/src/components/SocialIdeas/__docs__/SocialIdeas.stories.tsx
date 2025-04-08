import type { Meta, StoryObj } from "@storybook/react";
import SocialIdeas from "../SocialIdeas";

const meta: Meta<typeof SocialIdeas> = { title: "unDraw/SocialIdeas", component: SocialIdeas };

export default meta;
type Story = StoryObj<typeof SocialIdeas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SocialBio from "../SocialBio";

const meta: Meta<typeof SocialBio> = { title: "unDraw/SocialBio", component: SocialBio };

export default meta;
type Story = StoryObj<typeof SocialBio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

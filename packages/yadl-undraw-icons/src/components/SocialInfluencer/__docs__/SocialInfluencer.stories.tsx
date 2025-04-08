import type { Meta, StoryObj } from "@storybook/react";
import SocialInfluencer from "../SocialInfluencer";

const meta: Meta<typeof SocialInfluencer> = { title: "unDraw/SocialInfluencer", component: SocialInfluencer };

export default meta;
type Story = StoryObj<typeof SocialInfluencer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

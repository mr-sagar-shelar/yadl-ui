import type { Meta, StoryObj } from "@storybook/react";
import SocialThinking from "../SocialThinking";

const meta: Meta<typeof SocialThinking> = { title: "unDraw/SocialThinking", component: SocialThinking };

export default meta;
type Story = StoryObj<typeof SocialThinking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

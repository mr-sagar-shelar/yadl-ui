import type { Meta, StoryObj } from "@storybook/react";
import SocialGirl from "../SocialGirl";

const meta: Meta<typeof SocialGirl> = { title: "unDraw/SocialGirl", component: SocialGirl };

export default meta;
type Story = StoryObj<typeof SocialGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SocialUser from "../SocialUser";

const meta: Meta<typeof SocialUser> = { title: "unDraw/SocialUser", component: SocialUser };

export default meta;
type Story = StoryObj<typeof SocialUser>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

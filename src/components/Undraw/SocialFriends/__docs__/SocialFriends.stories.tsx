import type { Meta, StoryObj } from "@storybook/react";
import SocialFriends from "../SocialFriends";

const meta: Meta<typeof SocialFriends> = { title: "unDraw/SocialFriends", component: SocialFriends };

export default meta;
type Story = StoryObj<typeof SocialFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

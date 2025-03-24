import type { Meta, StoryObj } from "@storybook/react";
import FriendsFriends from "../FriendsFriends";

const meta: Meta<typeof FriendsFriends> = { title: "unDraw/FriendsFriends", component: FriendsFriends };

export default meta;
type Story = StoryObj<typeof FriendsFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

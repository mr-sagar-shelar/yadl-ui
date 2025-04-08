import type { Meta, StoryObj } from "@storybook/react";
import UnexpectedFriendsUnexpectedFriends from "../UnexpectedFriendsUnexpectedFriends";

const meta: Meta<typeof UnexpectedFriendsUnexpectedFriends> = { title: "unDraw/UnexpectedFriendsUnexpectedFriends", component: UnexpectedFriendsUnexpectedFriends };

export default meta;
type Story = StoryObj<typeof UnexpectedFriendsUnexpectedFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

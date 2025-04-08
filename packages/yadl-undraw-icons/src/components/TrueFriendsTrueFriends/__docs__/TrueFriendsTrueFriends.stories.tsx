import type { Meta, StoryObj } from "@storybook/react";
import TrueFriendsTrueFriends from "../TrueFriendsTrueFriends";

const meta: Meta<typeof TrueFriendsTrueFriends> = { title: "unDraw/TrueFriendsTrueFriends", component: TrueFriendsTrueFriends };

export default meta;
type Story = StoryObj<typeof TrueFriendsTrueFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

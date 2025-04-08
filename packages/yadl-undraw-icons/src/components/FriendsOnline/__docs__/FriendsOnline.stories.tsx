import type { Meta, StoryObj } from "@storybook/react";
import FriendsOnline from "../FriendsOnline";

const meta: Meta<typeof FriendsOnline> = { title: "unDraw/FriendsOnline", component: FriendsOnline };

export default meta;
type Story = StoryObj<typeof FriendsOnline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

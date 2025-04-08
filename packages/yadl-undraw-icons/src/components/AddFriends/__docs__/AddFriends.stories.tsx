import type { Meta, StoryObj } from "@storybook/react";
import AddFriends from "../AddFriends";

const meta: Meta<typeof AddFriends> = { title: "unDraw/AddFriends", component: AddFriends };

export default meta;
type Story = StoryObj<typeof AddFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

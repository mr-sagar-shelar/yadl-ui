import type { Meta, StoryObj } from "@storybook/react";
import WorkFriends from "../WorkFriends";

const meta: Meta<typeof WorkFriends> = { title: "unDraw/WorkFriends", component: WorkFriends };

export default meta;
type Story = StoryObj<typeof WorkFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

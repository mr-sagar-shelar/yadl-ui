import type { Meta, StoryObj } from "@storybook/react";
import UsersPerMinute from "../UsersPerMinute";

const meta: Meta<typeof UsersPerMinute> = { title: "unDraw/UsersPerMinute", component: UsersPerMinute };

export default meta;
type Story = StoryObj<typeof UsersPerMinute>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

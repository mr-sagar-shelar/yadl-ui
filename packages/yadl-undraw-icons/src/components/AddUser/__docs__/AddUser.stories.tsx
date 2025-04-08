import type { Meta, StoryObj } from "@storybook/react";
import AddUser from "../AddUser";

const meta: Meta<typeof AddUser> = { title: "unDraw/AddUser", component: AddUser };

export default meta;
type Story = StoryObj<typeof AddUser>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

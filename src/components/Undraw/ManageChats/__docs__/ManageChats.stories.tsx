import type { Meta, StoryObj } from "@storybook/react";
import ManageChats from "../ManageChats";

const meta: Meta<typeof ManageChats> = { title: "unDraw/ManageChats", component: ManageChats };

export default meta;
type Story = StoryObj<typeof ManageChats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

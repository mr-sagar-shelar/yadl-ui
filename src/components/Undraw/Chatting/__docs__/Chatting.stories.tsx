import type { Meta, StoryObj } from "@storybook/react";
import Chatting from "../Chatting";

const meta: Meta<typeof Chatting> = { title: "unDraw/Chatting", component: Chatting };

export default meta;
type Story = StoryObj<typeof Chatting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

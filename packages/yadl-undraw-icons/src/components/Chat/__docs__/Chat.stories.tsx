import type { Meta, StoryObj } from "@storybook/react";
import Chat from "../Chat";

const meta: Meta<typeof Chat> = { title: "unDraw/Chat", component: Chat };

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

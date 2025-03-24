import type { Meta, StoryObj } from "@storybook/react";
import ChatBot from "../ChatBot";

const meta: Meta<typeof ChatBot> = { title: "unDraw/ChatBot", component: ChatBot };

export default meta;
type Story = StoryObj<typeof ChatBot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

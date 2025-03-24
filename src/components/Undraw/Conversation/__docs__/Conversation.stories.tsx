import type { Meta, StoryObj } from "@storybook/react";
import Conversation from "../Conversation";

const meta: Meta<typeof Conversation> = { title: "unDraw/Conversation", component: Conversation };

export default meta;
type Story = StoryObj<typeof Conversation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import MessageSent from "../MessageSent";

const meta: Meta<typeof MessageSent> = { title: "unDraw/MessageSent", component: MessageSent };

export default meta;
type Story = StoryObj<typeof MessageSent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

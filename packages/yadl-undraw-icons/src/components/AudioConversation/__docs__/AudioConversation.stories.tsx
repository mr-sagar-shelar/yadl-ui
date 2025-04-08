import type { Meta, StoryObj } from "@storybook/react";
import AudioConversation from "../AudioConversation";

const meta: Meta<typeof AudioConversation> = { title: "unDraw/AudioConversation", component: AudioConversation };

export default meta;
type Story = StoryObj<typeof AudioConversation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

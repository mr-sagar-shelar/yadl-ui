import type { Meta, StoryObj } from "@storybook/react";
import VoiceInterface from "../VoiceInterface";

const meta: Meta<typeof VoiceInterface> = { title: "unDraw/VoiceInterface", component: VoiceInterface };

export default meta;
type Story = StoryObj<typeof VoiceInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

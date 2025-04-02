import type { Meta, StoryObj } from "@storybook/react";
import VoiceMessages from "../VoiceMessages";

const meta: Meta<typeof VoiceMessages> = { title: "unDraw/VoiceMessages", component: VoiceMessages };

export default meta;
type Story = StoryObj<typeof VoiceMessages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

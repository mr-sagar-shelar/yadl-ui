import type { Meta, StoryObj } from "@storybook/react";
import VoiceControlVoiceControl from "../VoiceControlVoiceControl";

const meta: Meta<typeof VoiceControlVoiceControl> = { title: "unDraw/VoiceControlVoiceControl", component: VoiceControlVoiceControl };

export default meta;
type Story = StoryObj<typeof VoiceControlVoiceControl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

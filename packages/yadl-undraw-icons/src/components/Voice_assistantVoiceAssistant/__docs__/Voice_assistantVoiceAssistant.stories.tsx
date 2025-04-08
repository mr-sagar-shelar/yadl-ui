import type { Meta, StoryObj } from "@storybook/react";
import Voice_assistantVoiceAssistant from "../Voice_assistantVoiceAssistant";

const meta: Meta<typeof Voice_assistantVoiceAssistant> = { title: "unDraw/Voice_assistantVoiceAssistant", component: Voice_assistantVoiceAssistant };

export default meta;
type Story = StoryObj<typeof Voice_assistantVoiceAssistant>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

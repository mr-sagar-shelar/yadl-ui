import type { Meta, StoryObj } from "@storybook/react";
import AIVoiceInterface from "../AIVoiceInterface";

const meta: Meta<typeof AIVoiceInterface> = { title: "unDraw/AIVoiceInterface", component: AIVoiceInterface };

export default meta;
type Story = StoryObj<typeof AIVoiceInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

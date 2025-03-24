import type { Meta, StoryObj } from "@storybook/react";
import SpeechToText from "../SpeechToText";

const meta: Meta<typeof SpeechToText> = { title: "unDraw/SpeechToText", component: SpeechToText };

export default meta;
type Story = StoryObj<typeof SpeechToText>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import SpeechServices from "../SpeechServices";

const meta: Meta<typeof SpeechServices> = { title: "Azure/AiMachineLearning/SpeechServices", component: SpeechServices };

export default meta;
type Story = StoryObj<typeof SpeechServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Transcribe from "../Transcribe";

const meta: Meta<typeof Transcribe> = { title: "AWS/MachineLearning/Transcribe", component: Transcribe };

export default meta;
type Story = StoryObj<typeof Transcribe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Texttospeech from "../Texttospeech";

const meta: Meta<typeof Texttospeech> = { title: "GCP/Texttospeech", component: Texttospeech };

export default meta;
type Story = StoryObj<typeof Texttospeech>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

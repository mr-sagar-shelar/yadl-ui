import type { Meta, StoryObj } from "@storybook/react";
import ChimeVoiceConnector from "../ChimeVoiceConnector";

const meta: Meta<typeof ChimeVoiceConnector> = { title: "AWS/BusinessApplications/ChimeVoiceConnector", component: ChimeVoiceConnector };

export default meta;
type Story = StoryObj<typeof ChimeVoiceConnector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

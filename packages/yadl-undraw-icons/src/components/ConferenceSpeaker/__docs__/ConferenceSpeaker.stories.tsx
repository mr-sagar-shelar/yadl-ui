import type { Meta, StoryObj } from "@storybook/react";
import ConferenceSpeaker from "../ConferenceSpeaker";

const meta: Meta<typeof ConferenceSpeaker> = { title: "unDraw/ConferenceSpeaker", component: ConferenceSpeaker };

export default meta;
type Story = StoryObj<typeof ConferenceSpeaker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

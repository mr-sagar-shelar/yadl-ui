import type { Meta, StoryObj } from "@storybook/react";
import Happy_musicHappyMusic from "../Happy_musicHappyMusic";

const meta: Meta<typeof Happy_musicHappyMusic> = { title: "unDraw/Happy_musicHappyMusic", component: Happy_musicHappyMusic };

export default meta;
type Story = StoryObj<typeof Happy_musicHappyMusic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

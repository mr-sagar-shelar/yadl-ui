import type { Meta, StoryObj } from "@storybook/react";
import DigitalArtwork from "../DigitalArtwork";

const meta: Meta<typeof DigitalArtwork> = { title: "unDraw/DigitalArtwork", component: DigitalArtwork };

export default meta;
type Story = StoryObj<typeof DigitalArtwork>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

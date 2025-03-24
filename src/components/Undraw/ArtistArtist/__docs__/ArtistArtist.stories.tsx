import type { Meta, StoryObj } from "@storybook/react";
import ArtistArtist from "../ArtistArtist";

const meta: Meta<typeof ArtistArtist> = { title: "unDraw/ArtistArtist", component: ArtistArtist };

export default meta;
type Story = StoryObj<typeof ArtistArtist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

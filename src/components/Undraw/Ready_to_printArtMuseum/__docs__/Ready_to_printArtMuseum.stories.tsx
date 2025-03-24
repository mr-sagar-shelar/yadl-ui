import type { Meta, StoryObj } from "@storybook/react";
import Ready_to_printArtMuseum from "../Ready_to_printArtMuseum";

const meta: Meta<typeof Ready_to_printArtMuseum> = { title: "unDraw/Ready_to_printArtMuseum", component: Ready_to_printArtMuseum };

export default meta;
type Story = StoryObj<typeof Ready_to_printArtMuseum>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

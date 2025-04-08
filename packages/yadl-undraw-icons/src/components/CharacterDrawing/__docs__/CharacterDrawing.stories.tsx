import type { Meta, StoryObj } from "@storybook/react";
import CharacterDrawing from "../CharacterDrawing";

const meta: Meta<typeof CharacterDrawing> = { title: "unDraw/CharacterDrawing", component: CharacterDrawing };

export default meta;
type Story = StoryObj<typeof CharacterDrawing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

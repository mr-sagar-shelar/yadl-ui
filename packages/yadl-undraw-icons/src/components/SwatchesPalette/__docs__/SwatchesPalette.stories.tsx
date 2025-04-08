import type { Meta, StoryObj } from "@storybook/react";
import SwatchesPalette from "../SwatchesPalette";

const meta: Meta<typeof SwatchesPalette> = { title: "unDraw/SwatchesPalette", component: SwatchesPalette };

export default meta;
type Story = StoryObj<typeof SwatchesPalette>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

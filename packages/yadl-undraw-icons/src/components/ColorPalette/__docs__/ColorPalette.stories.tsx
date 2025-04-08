import type { Meta, StoryObj } from "@storybook/react";
import ColorPalette from "../ColorPalette";

const meta: Meta<typeof ColorPalette> = { title: "unDraw/ColorPalette", component: ColorPalette };

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import ColorSchemes from "../ColorSchemes";

const meta: Meta<typeof ColorSchemes> = { title: "unDraw/ColorSchemes", component: ColorSchemes };

export default meta;
type Story = StoryObj<typeof ColorSchemes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

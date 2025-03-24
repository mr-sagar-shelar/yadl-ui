import type { Meta, StoryObj } from "@storybook/react";
import MoonlightMoonlight from "../MoonlightMoonlight";

const meta: Meta<typeof MoonlightMoonlight> = { title: "unDraw/MoonlightMoonlight", component: MoonlightMoonlight };

export default meta;
type Story = StoryObj<typeof MoonlightMoonlight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

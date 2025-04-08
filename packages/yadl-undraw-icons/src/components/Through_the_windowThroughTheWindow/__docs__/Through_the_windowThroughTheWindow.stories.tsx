import type { Meta, StoryObj } from "@storybook/react";
import Through_the_windowThroughTheWindow from "../Through_the_windowThroughTheWindow";

const meta: Meta<typeof Through_the_windowThroughTheWindow> = { title: "unDraw/Through_the_windowThroughTheWindow", component: Through_the_windowThroughTheWindow };

export default meta;
type Story = StoryObj<typeof Through_the_windowThroughTheWindow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

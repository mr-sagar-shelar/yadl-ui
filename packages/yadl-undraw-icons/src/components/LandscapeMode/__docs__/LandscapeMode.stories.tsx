import type { Meta, StoryObj } from "@storybook/react";
import LandscapeMode from "../LandscapeMode";

const meta: Meta<typeof LandscapeMode> = { title: "unDraw/LandscapeMode", component: LandscapeMode };

export default meta;
type Story = StoryObj<typeof LandscapeMode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

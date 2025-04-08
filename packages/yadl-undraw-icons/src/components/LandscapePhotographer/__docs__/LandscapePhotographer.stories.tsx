import type { Meta, StoryObj } from "@storybook/react";
import LandscapePhotographer from "../LandscapePhotographer";

const meta: Meta<typeof LandscapePhotographer> = { title: "unDraw/LandscapePhotographer", component: LandscapePhotographer };

export default meta;
type Story = StoryObj<typeof LandscapePhotographer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

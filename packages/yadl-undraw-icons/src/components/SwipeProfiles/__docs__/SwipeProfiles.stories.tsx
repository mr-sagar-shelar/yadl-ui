import type { Meta, StoryObj } from "@storybook/react";
import SwipeProfiles from "../SwipeProfiles";

const meta: Meta<typeof SwipeProfiles> = { title: "unDraw/SwipeProfiles", component: SwipeProfiles };

export default meta;
type Story = StoryObj<typeof SwipeProfiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

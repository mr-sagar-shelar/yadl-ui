import type { Meta, StoryObj } from "@storybook/react";
import Preferences from "../Preferences";

const meta: Meta<typeof Preferences> = { title: "unDraw/Preferences", component: Preferences };

export default meta;
type Story = StoryObj<typeof Preferences>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

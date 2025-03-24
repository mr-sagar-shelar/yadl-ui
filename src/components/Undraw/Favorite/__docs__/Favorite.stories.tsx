import type { Meta, StoryObj } from "@storybook/react";
import Favorite from "../Favorite";

const meta: Meta<typeof Favorite> = { title: "unDraw/Favorite", component: Favorite };

export default meta;
type Story = StoryObj<typeof Favorite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

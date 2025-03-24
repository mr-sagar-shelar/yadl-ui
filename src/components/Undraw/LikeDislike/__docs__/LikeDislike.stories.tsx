import type { Meta, StoryObj } from "@storybook/react";
import LikeDislike from "../LikeDislike";

const meta: Meta<typeof LikeDislike> = { title: "unDraw/LikeDislike", component: LikeDislike };

export default meta;
type Story = StoryObj<typeof LikeDislike>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

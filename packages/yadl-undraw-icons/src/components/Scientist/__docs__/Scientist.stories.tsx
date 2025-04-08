import type { Meta, StoryObj } from "@storybook/react";
import Scientist from "../Scientist";

const meta: Meta<typeof Scientist> = { title: "unDraw/Scientist", component: Scientist };

export default meta;
type Story = StoryObj<typeof Scientist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

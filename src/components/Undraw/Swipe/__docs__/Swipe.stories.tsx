import type { Meta, StoryObj } from "@storybook/react";
import Swipe from "../Swipe";

const meta: Meta<typeof Swipe> = { title: "unDraw/Swipe", component: Swipe };

export default meta;
type Story = StoryObj<typeof Swipe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

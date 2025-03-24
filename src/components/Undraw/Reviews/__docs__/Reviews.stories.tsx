import type { Meta, StoryObj } from "@storybook/react";
import Reviews from "../Reviews";

const meta: Meta<typeof Reviews> = { title: "unDraw/Reviews", component: Reviews };

export default meta;
type Story = StoryObj<typeof Reviews>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

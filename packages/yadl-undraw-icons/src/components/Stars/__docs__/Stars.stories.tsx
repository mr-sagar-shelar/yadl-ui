import type { Meta, StoryObj } from "@storybook/react";
import Stars from "../Stars";

const meta: Meta<typeof Stars> = { title: "unDraw/Stars", component: Stars };

export default meta;
type Story = StoryObj<typeof Stars>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

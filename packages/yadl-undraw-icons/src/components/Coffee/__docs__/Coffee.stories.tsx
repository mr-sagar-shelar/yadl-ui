import type { Meta, StoryObj } from "@storybook/react";
import Coffee from "../Coffee";

const meta: Meta<typeof Coffee> = { title: "unDraw/Coffee", component: Coffee };

export default meta;
type Story = StoryObj<typeof Coffee>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

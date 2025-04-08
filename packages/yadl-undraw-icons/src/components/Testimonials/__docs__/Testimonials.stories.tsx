import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "../Testimonials";

const meta: Meta<typeof Testimonials> = { title: "unDraw/Testimonials", component: Testimonials };

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

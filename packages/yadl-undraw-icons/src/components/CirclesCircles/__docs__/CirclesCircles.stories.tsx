import type { Meta, StoryObj } from "@storybook/react";
import CirclesCircles from "../CirclesCircles";

const meta: Meta<typeof CirclesCircles> = { title: "unDraw/CirclesCircles", component: CirclesCircles };

export default meta;
type Story = StoryObj<typeof CirclesCircles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

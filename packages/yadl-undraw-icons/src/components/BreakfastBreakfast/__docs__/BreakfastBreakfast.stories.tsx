import type { Meta, StoryObj } from "@storybook/react";
import BreakfastBreakfast from "../BreakfastBreakfast";

const meta: Meta<typeof BreakfastBreakfast> = { title: "unDraw/BreakfastBreakfast", component: BreakfastBreakfast };

export default meta;
type Story = StoryObj<typeof BreakfastBreakfast>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Investing from "../Investing";

const meta: Meta<typeof Investing> = { title: "unDraw/Investing", component: Investing };

export default meta;
type Story = StoryObj<typeof Investing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

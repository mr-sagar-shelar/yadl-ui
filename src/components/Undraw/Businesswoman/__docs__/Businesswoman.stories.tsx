import type { Meta, StoryObj } from "@storybook/react";
import Businesswoman from "../Businesswoman";

const meta: Meta<typeof Businesswoman> = { title: "unDraw/Businesswoman", component: Businesswoman };

export default meta;
type Story = StoryObj<typeof Businesswoman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

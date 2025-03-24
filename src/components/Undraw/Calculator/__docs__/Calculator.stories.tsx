import type { Meta, StoryObj } from "@storybook/react";
import Calculator from "../Calculator";

const meta: Meta<typeof Calculator> = { title: "unDraw/Calculator", component: Calculator };

export default meta;
type Story = StoryObj<typeof Calculator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

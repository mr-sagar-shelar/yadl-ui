import type { Meta, StoryObj } from "@storybook/react";
import Growing from "../Growing";

const meta: Meta<typeof Growing> = { title: "unDraw/Growing", component: Growing };

export default meta;
type Story = StoryObj<typeof Growing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

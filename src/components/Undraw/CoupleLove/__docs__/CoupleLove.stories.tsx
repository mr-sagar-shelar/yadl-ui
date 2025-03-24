import type { Meta, StoryObj } from "@storybook/react";
import CoupleLove from "../CoupleLove";

const meta: Meta<typeof CoupleLove> = { title: "unDraw/CoupleLove", component: CoupleLove };

export default meta;
type Story = StoryObj<typeof CoupleLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

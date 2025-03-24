import type { Meta, StoryObj } from "@storybook/react";
import Warning from "../Warning";

const meta: Meta<typeof Warning> = { title: "unDraw/Warning", component: Warning };

export default meta;
type Story = StoryObj<typeof Warning>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

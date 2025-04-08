import type { Meta, StoryObj } from "@storybook/react";
import Fast from "../Fast";

const meta: Meta<typeof Fast> = { title: "unDraw/Fast", component: Fast };

export default meta;
type Story = StoryObj<typeof Fast>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

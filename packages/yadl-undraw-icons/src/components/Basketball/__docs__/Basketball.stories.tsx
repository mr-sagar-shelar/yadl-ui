import type { Meta, StoryObj } from "@storybook/react";
import Basketball from "../Basketball";

const meta: Meta<typeof Basketball> = { title: "unDraw/Basketball", component: Basketball };

export default meta;
type Story = StoryObj<typeof Basketball>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

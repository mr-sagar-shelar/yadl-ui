import type { Meta, StoryObj } from "@storybook/react";
import Working from "../Working";

const meta: Meta<typeof Working> = { title: "unDraw/Working", component: Working };

export default meta;
type Story = StoryObj<typeof Working>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

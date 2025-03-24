import type { Meta, StoryObj } from "@storybook/react";
import ABetterWorld from "../ABetterWorld";

const meta: Meta<typeof ABetterWorld> = { title: "unDraw/ABetterWorld", component: ABetterWorld };

export default meta;
type Story = StoryObj<typeof ABetterWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

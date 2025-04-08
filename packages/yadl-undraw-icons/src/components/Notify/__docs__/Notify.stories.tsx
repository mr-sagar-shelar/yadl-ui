import type { Meta, StoryObj } from "@storybook/react";
import Notify from "../Notify";

const meta: Meta<typeof Notify> = { title: "unDraw/Notify", component: Notify };

export default meta;
type Story = StoryObj<typeof Notify>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

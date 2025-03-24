import type { Meta, StoryObj } from "@storybook/react";
import EverydayLife from "../EverydayLife";

const meta: Meta<typeof EverydayLife> = { title: "unDraw/EverydayLife", component: EverydayLife };

export default meta;
type Story = StoryObj<typeof EverydayLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

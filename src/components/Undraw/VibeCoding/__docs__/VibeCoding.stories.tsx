import type { Meta, StoryObj } from "@storybook/react";
import VibeCoding from "../VibeCoding";

const meta: Meta<typeof VibeCoding> = { title: "unDraw/VibeCoding", component: VibeCoding };

export default meta;
type Story = StoryObj<typeof VibeCoding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

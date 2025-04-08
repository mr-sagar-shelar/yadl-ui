import type { Meta, StoryObj } from "@storybook/react";
import FocusFocus from "../FocusFocus";

const meta: Meta<typeof FocusFocus> = { title: "unDraw/FocusFocus", component: FocusFocus };

export default meta;
type Story = StoryObj<typeof FocusFocus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

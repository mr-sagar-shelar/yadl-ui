import type { Meta, StoryObj } from "@storybook/react";
import Typing from "../Typing";

const meta: Meta<typeof Typing> = { title: "unDraw/Typing", component: Typing };

export default meta;
type Story = StoryObj<typeof Typing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

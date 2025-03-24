import type { Meta, StoryObj } from "@storybook/react";
import WineTasting from "../WineTasting";

const meta: Meta<typeof WineTasting> = { title: "unDraw/WineTasting", component: WineTasting };

export default meta;
type Story = StoryObj<typeof WineTasting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

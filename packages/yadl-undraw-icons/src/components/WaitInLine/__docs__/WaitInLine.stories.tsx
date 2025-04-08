import type { Meta, StoryObj } from "@storybook/react";
import WaitInLine from "../WaitInLine";

const meta: Meta<typeof WaitInLine> = { title: "unDraw/WaitInLine", component: WaitInLine };

export default meta;
type Story = StoryObj<typeof WaitInLine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import FinishLine from "../FinishLine";

const meta: Meta<typeof FinishLine> = { title: "unDraw/FinishLine", component: FinishLine };

export default meta;
type Story = StoryObj<typeof FinishLine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

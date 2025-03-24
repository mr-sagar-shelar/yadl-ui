import type { Meta, StoryObj } from "@storybook/react";
import RightDirection from "../RightDirection";

const meta: Meta<typeof RightDirection> = { title: "unDraw/RightDirection", component: RightDirection };

export default meta;
type Story = StoryObj<typeof RightDirection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import NotFound from "../NotFound";

const meta: Meta<typeof NotFound> = { title: "unDraw/NotFound", component: NotFound };

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Join from "../Join";

const meta: Meta<typeof Join> = { title: "unDraw/Join", component: Join };

export default meta;
type Story = StoryObj<typeof Join>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

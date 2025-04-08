import type { Meta, StoryObj } from "@storybook/react";
import Result from "../Result";

const meta: Meta<typeof Result> = { title: "unDraw/Result", component: Result };

export default meta;
type Story = StoryObj<typeof Result>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

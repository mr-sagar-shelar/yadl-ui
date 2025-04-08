import type { Meta, StoryObj } from "@storybook/react";
import SnowFun from "../SnowFun";

const meta: Meta<typeof SnowFun> = { title: "unDraw/SnowFun", component: SnowFun };

export default meta;
type Story = StoryObj<typeof SnowFun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

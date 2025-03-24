import type { Meta, StoryObj } from "@storybook/react";
import HavingFun from "../HavingFun";

const meta: Meta<typeof HavingFun> = { title: "unDraw/HavingFun", component: HavingFun };

export default meta;
type Story = StoryObj<typeof HavingFun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

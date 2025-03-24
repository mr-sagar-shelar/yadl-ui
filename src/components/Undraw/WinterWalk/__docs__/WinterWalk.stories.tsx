import type { Meta, StoryObj } from "@storybook/react";
import WinterWalk from "../WinterWalk";

const meta: Meta<typeof WinterWalk> = { title: "unDraw/WinterWalk", component: WinterWalk };

export default meta;
type Story = StoryObj<typeof WinterWalk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

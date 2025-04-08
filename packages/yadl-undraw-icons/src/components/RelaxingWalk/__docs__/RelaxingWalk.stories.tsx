import type { Meta, StoryObj } from "@storybook/react";
import RelaxingWalk from "../RelaxingWalk";

const meta: Meta<typeof RelaxingWalk> = { title: "unDraw/RelaxingWalk", component: RelaxingWalk };

export default meta;
type Story = StoryObj<typeof RelaxingWalk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

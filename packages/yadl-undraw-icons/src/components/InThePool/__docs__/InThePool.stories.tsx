import type { Meta, StoryObj } from "@storybook/react";
import InThePool from "../InThePool";

const meta: Meta<typeof InThePool> = { title: "unDraw/InThePool", component: InThePool };

export default meta;
type Story = StoryObj<typeof InThePool>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

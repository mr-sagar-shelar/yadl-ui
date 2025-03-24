import type { Meta, StoryObj } from "@storybook/react";
import CircuitBoard from "../CircuitBoard";

const meta: Meta<typeof CircuitBoard> = { title: "unDraw/CircuitBoard", component: CircuitBoard };

export default meta;
type Story = StoryObj<typeof CircuitBoard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

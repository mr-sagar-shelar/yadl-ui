import type { Meta, StoryObj } from "@storybook/react";
import CircuitCircuit from "../CircuitCircuit";

const meta: Meta<typeof CircuitCircuit> = { title: "unDraw/CircuitCircuit", component: CircuitCircuit };

export default meta;
type Story = StoryObj<typeof CircuitCircuit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import PairProgramming from "../PairProgramming";

const meta: Meta<typeof PairProgramming> = { title: "unDraw/PairProgramming", component: PairProgramming };

export default meta;
type Story = StoryObj<typeof PairProgramming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

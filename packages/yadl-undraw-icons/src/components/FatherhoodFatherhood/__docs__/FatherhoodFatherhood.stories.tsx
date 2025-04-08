import type { Meta, StoryObj } from "@storybook/react";
import FatherhoodFatherhood from "../FatherhoodFatherhood";

const meta: Meta<typeof FatherhoodFatherhood> = { title: "unDraw/FatherhoodFatherhood", component: FatherhoodFatherhood };

export default meta;
type Story = StoryObj<typeof FatherhoodFatherhood>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

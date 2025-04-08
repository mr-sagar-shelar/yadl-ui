import type { Meta, StoryObj } from "@storybook/react";
import FittingPiece from "../FittingPiece";

const meta: Meta<typeof FittingPiece> = { title: "unDraw/FittingPiece", component: FittingPiece };

export default meta;
type Story = StoryObj<typeof FittingPiece>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

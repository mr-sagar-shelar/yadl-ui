import type { Meta, StoryObj } from "@storybook/react";
import FittingPieces from "../FittingPieces";

const meta: Meta<typeof FittingPieces> = { title: "unDraw/FittingPieces", component: FittingPieces };

export default meta;
type Story = StoryObj<typeof FittingPieces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

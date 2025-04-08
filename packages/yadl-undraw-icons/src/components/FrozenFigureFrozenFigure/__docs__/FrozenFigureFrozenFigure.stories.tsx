import type { Meta, StoryObj } from "@storybook/react";
import FrozenFigureFrozenFigure from "../FrozenFigureFrozenFigure";

const meta: Meta<typeof FrozenFigureFrozenFigure> = { title: "unDraw/FrozenFigureFrozenFigure", component: FrozenFigureFrozenFigure };

export default meta;
type Story = StoryObj<typeof FrozenFigureFrozenFigure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

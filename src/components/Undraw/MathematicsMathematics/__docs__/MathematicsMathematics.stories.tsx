import type { Meta, StoryObj } from "@storybook/react";
import MathematicsMathematics from "../MathematicsMathematics";

const meta: Meta<typeof MathematicsMathematics> = { title: "unDraw/MathematicsMathematics", component: MathematicsMathematics };

export default meta;
type Story = StoryObj<typeof MathematicsMathematics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

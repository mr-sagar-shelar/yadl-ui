import type { Meta, StoryObj } from "@storybook/react";
import StabilityBallStabilityBall from "../StabilityBallStabilityBall";

const meta: Meta<typeof StabilityBallStabilityBall> = { title: "unDraw/StabilityBallStabilityBall", component: StabilityBallStabilityBall };

export default meta;
type Story = StoryObj<typeof StabilityBallStabilityBall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

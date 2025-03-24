import type { Meta, StoryObj } from "@storybook/react";
import BreakingObstaclesBreakingBarriers from "../BreakingObstaclesBreakingBarriers";

const meta: Meta<typeof BreakingObstaclesBreakingBarriers> = { title: "unDraw/BreakingObstaclesBreakingBarriers", component: BreakingObstaclesBreakingBarriers };

export default meta;
type Story = StoryObj<typeof BreakingObstaclesBreakingBarriers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

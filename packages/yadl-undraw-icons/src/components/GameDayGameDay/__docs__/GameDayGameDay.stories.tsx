import type { Meta, StoryObj } from "@storybook/react";
import GameDayGameDay from "../GameDayGameDay";

const meta: Meta<typeof GameDayGameDay> = { title: "unDraw/GameDayGameDay", component: GameDayGameDay };

export default meta;
type Story = StoryObj<typeof GameDayGameDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

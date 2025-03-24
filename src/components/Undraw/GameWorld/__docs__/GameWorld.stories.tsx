import type { Meta, StoryObj } from "@storybook/react";
import GameWorld from "../GameWorld";

const meta: Meta<typeof GameWorld> = { title: "unDraw/GameWorld", component: GameWorld };

export default meta;
type Story = StoryObj<typeof GameWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

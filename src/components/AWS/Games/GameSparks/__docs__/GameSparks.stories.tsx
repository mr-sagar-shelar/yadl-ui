import type { Meta, StoryObj } from "@storybook/react";
import GameSparks from "../GameSparks";

const meta: Meta<typeof GameSparks> = { title: "AWS/Games/GameSparks", component: GameSparks };

export default meta;
type Story = StoryObj<typeof GameSparks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

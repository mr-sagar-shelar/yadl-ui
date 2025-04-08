import type { Meta, StoryObj } from "@storybook/react";
import GameLift from "../GameLift";

const meta: Meta<typeof GameLift> = { title: "AWS/Games/GameLift", component: GameLift };

export default meta;
type Story = StoryObj<typeof GameLift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

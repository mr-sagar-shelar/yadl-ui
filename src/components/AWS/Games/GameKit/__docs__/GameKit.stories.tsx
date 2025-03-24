import type { Meta, StoryObj } from "@storybook/react";
import GameKit from "../GameKit";

const meta: Meta<typeof GameKit> = { title: "AWS/Games/GameKit", component: GameKit };

export default meta;
type Story = StoryObj<typeof GameKit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

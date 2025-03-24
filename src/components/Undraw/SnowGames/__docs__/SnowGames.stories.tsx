import type { Meta, StoryObj } from "@storybook/react";
import SnowGames from "../SnowGames";

const meta: Meta<typeof SnowGames> = { title: "unDraw/SnowGames", component: SnowGames };

export default meta;
type Story = StoryObj<typeof SnowGames>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

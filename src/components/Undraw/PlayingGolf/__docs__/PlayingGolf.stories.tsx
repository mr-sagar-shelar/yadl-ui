import type { Meta, StoryObj } from "@storybook/react";
import PlayingGolf from "../PlayingGolf";

const meta: Meta<typeof PlayingGolf> = { title: "unDraw/PlayingGolf", component: PlayingGolf };

export default meta;
type Story = StoryObj<typeof PlayingGolf>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

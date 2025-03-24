import type { Meta, StoryObj } from "@storybook/react";
import MovieNight from "../MovieNight";

const meta: Meta<typeof MovieNight> = { title: "unDraw/MovieNight", component: MovieNight };

export default meta;
type Story = StoryObj<typeof MovieNight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

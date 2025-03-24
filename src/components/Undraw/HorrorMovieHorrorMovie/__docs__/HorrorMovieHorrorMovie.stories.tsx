import type { Meta, StoryObj } from "@storybook/react";
import HorrorMovieHorrorMovie from "../HorrorMovieHorrorMovie";

const meta: Meta<typeof HorrorMovieHorrorMovie> = { title: "unDraw/HorrorMovieHorrorMovie", component: HorrorMovieHorrorMovie };

export default meta;
type Story = StoryObj<typeof HorrorMovieHorrorMovie>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

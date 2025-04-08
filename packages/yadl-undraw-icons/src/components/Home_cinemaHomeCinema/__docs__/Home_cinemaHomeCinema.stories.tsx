import type { Meta, StoryObj } from "@storybook/react";
import Home_cinemaHomeCinema from "../Home_cinemaHomeCinema";

const meta: Meta<typeof Home_cinemaHomeCinema> = { title: "unDraw/Home_cinemaHomeCinema", component: Home_cinemaHomeCinema };

export default meta;
type Story = StoryObj<typeof Home_cinemaHomeCinema>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

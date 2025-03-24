import type { Meta, StoryObj } from "@storybook/react";
import BarberBarber from "../BarberBarber";

const meta: Meta<typeof BarberBarber> = { title: "unDraw/BarberBarber", component: BarberBarber };

export default meta;
type Story = StoryObj<typeof BarberBarber>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

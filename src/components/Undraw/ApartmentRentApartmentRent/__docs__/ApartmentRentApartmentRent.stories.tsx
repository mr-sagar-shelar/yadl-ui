import type { Meta, StoryObj } from "@storybook/react";
import ApartmentRentApartmentRent from "../ApartmentRentApartmentRent";

const meta: Meta<typeof ApartmentRentApartmentRent> = { title: "unDraw/ApartmentRentApartmentRent", component: ApartmentRentApartmentRent };

export default meta;
type Story = StoryObj<typeof ApartmentRentApartmentRent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Reservations from "../Reservations";

const meta: Meta<typeof Reservations> = { title: "Azure/General/Reservations", component: Reservations };

export default meta;
type Story = StoryObj<typeof Reservations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

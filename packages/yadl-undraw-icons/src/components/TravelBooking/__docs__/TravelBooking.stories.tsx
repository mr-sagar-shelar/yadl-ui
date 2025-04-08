import type { Meta, StoryObj } from "@storybook/react";
import TravelBooking from "../TravelBooking";

const meta: Meta<typeof TravelBooking> = { title: "unDraw/TravelBooking", component: TravelBooking };

export default meta;
type Story = StoryObj<typeof TravelBooking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

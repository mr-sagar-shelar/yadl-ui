import type { Meta, StoryObj } from "@storybook/react";
import Booking from "../Booking";

const meta: Meta<typeof Booking> = { title: "unDraw/Booking", component: Booking };

export default meta;
type Story = StoryObj<typeof Booking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

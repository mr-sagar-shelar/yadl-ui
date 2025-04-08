import type { Meta, StoryObj } from "@storybook/react";
import BikeRide from "../BikeRide";

const meta: Meta<typeof BikeRide> = { title: "unDraw/BikeRide", component: BikeRide };

export default meta;
type Story = StoryObj<typeof BikeRide>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import RideABicycle from "../RideABicycle";

const meta: Meta<typeof RideABicycle> = { title: "unDraw/RideABicycle", component: RideABicycle };

export default meta;
type Story = StoryObj<typeof RideABicycle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DroneDelivery from "../DroneDelivery";

const meta: Meta<typeof DroneDelivery> = { title: "unDraw/DroneDelivery", component: DroneDelivery };

export default meta;
type Story = StoryObj<typeof DroneDelivery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

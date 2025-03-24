import type { Meta, StoryObj } from "@storybook/react";
import DeliveryTruck from "../DeliveryTruck";

const meta: Meta<typeof DeliveryTruck> = { title: "unDraw/DeliveryTruck", component: DeliveryTruck };

export default meta;
type Story = StoryObj<typeof DeliveryTruck>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import IoTFleetWise from "../IoTFleetWise";

const meta: Meta<typeof IoTFleetWise> = { title: "AWS/InternetofThings/IoTFleetWise", component: IoTFleetWise };

export default meta;
type Story = StoryObj<typeof IoTFleetWise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

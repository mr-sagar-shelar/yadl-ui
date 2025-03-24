import type { Meta, StoryObj } from "@storybook/react";
import IoTDeviceDefender from "../IoTDeviceDefender";

const meta: Meta<typeof IoTDeviceDefender> = { title: "AWS/InternetofThings/IoTDeviceDefender", component: IoTDeviceDefender };

export default meta;
type Story = StoryObj<typeof IoTDeviceDefender>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

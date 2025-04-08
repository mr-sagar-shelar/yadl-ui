import type { Meta, StoryObj } from "@storybook/react";
import IoTDeviceManagement from "../IoTDeviceManagement";

const meta: Meta<typeof IoTDeviceManagement> = { title: "AWS/InternetofThings/IoTDeviceManagement", component: IoTDeviceManagement };

export default meta;
type Story = StoryObj<typeof IoTDeviceManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

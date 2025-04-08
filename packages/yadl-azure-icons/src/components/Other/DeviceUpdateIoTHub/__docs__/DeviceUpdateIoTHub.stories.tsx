import type { Meta, StoryObj } from "@storybook/react";
import DeviceUpdateIoTHub from "../DeviceUpdateIoTHub";

const meta: Meta<typeof DeviceUpdateIoTHub> = { title: "Azure/Other/DeviceUpdateIoTHub", component: DeviceUpdateIoTHub };

export default meta;
type Story = StoryObj<typeof DeviceUpdateIoTHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

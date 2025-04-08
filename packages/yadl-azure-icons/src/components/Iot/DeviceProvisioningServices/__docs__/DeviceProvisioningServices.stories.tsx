import type { Meta, StoryObj } from "@storybook/react";
import DeviceProvisioningServices from "../DeviceProvisioningServices";

const meta: Meta<typeof DeviceProvisioningServices> = { title: "Azure/Iot/DeviceProvisioningServices", component: DeviceProvisioningServices };

export default meta;
type Story = StoryObj<typeof DeviceProvisioningServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

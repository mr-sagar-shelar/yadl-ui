import type { Meta, StoryObj } from "@storybook/react";
import Mobile_devicesMobileDevices from "../Mobile_devicesMobileDevices";

const meta: Meta<typeof Mobile_devicesMobileDevices> = { title: "unDraw/Mobile_devicesMobileDevices", component: Mobile_devicesMobileDevices };

export default meta;
type Story = StoryObj<typeof Mobile_devicesMobileDevices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

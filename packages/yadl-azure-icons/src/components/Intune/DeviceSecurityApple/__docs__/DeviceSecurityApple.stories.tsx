import type { Meta, StoryObj } from "@storybook/react";
import DeviceSecurityApple from "../DeviceSecurityApple";

const meta: Meta<typeof DeviceSecurityApple> = { title: "Azure/Intune/DeviceSecurityApple", component: DeviceSecurityApple };

export default meta;
type Story = StoryObj<typeof DeviceSecurityApple>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

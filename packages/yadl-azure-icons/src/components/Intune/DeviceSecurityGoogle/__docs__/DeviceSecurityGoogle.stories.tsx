import type { Meta, StoryObj } from "@storybook/react";
import DeviceSecurityGoogle from "../DeviceSecurityGoogle";

const meta: Meta<typeof DeviceSecurityGoogle> = { title: "Azure/Intune/DeviceSecurityGoogle", component: DeviceSecurityGoogle };

export default meta;
type Story = StoryObj<typeof DeviceSecurityGoogle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

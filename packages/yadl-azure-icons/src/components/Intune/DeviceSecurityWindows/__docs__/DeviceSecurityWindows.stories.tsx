import type { Meta, StoryObj } from "@storybook/react";
import DeviceSecurityWindows from "../DeviceSecurityWindows";

const meta: Meta<typeof DeviceSecurityWindows> = { title: "Azure/Intune/DeviceSecurityWindows", component: DeviceSecurityWindows };

export default meta;
type Story = StoryObj<typeof DeviceSecurityWindows>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

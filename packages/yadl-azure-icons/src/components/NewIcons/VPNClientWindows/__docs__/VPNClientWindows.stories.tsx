import type { Meta, StoryObj } from "@storybook/react";
import VPNClientWindows from "../VPNClientWindows";

const meta: Meta<typeof VPNClientWindows> = { title: "Azure/NewIcons/VPNClientWindows", component: VPNClientWindows };

export default meta;
type Story = StoryObj<typeof VPNClientWindows>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

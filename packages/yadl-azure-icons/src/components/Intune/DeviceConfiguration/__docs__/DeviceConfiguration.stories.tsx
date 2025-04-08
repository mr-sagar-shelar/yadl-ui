import type { Meta, StoryObj } from "@storybook/react";
import DeviceConfiguration from "../DeviceConfiguration";

const meta: Meta<typeof DeviceConfiguration> = { title: "Azure/Intune/DeviceConfiguration", component: DeviceConfiguration };

export default meta;
type Story = StoryObj<typeof DeviceConfiguration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

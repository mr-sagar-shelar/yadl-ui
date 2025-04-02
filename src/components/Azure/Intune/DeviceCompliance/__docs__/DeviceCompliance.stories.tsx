import type { Meta, StoryObj } from "@storybook/react";
import DeviceCompliance from "../DeviceCompliance";

const meta: Meta<typeof DeviceCompliance> = { title: "Azure/Intune/DeviceCompliance", component: DeviceCompliance };

export default meta;
type Story = StoryObj<typeof DeviceCompliance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

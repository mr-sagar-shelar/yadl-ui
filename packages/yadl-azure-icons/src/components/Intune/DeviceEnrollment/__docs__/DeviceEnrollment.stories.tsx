import type { Meta, StoryObj } from "@storybook/react";
import DeviceEnrollment from "../DeviceEnrollment";

const meta: Meta<typeof DeviceEnrollment> = { title: "Azure/Intune/DeviceEnrollment", component: DeviceEnrollment };

export default meta;
type Story = StoryObj<typeof DeviceEnrollment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

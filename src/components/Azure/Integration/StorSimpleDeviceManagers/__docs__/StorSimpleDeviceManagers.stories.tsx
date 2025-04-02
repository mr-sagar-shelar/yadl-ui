import type { Meta, StoryObj } from "@storybook/react";
import StorSimpleDeviceManagers from "../StorSimpleDeviceManagers";

const meta: Meta<typeof StorSimpleDeviceManagers> = { title: "Azure/Integration/StorSimpleDeviceManagers", component: StorSimpleDeviceManagers };

export default meta;
type Story = StoryObj<typeof StorSimpleDeviceManagers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

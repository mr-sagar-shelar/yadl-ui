import type { Meta, StoryObj } from "@storybook/react";
import SoftwareUpdates from "../SoftwareUpdates";

const meta: Meta<typeof SoftwareUpdates> = { title: "Azure/Intune/SoftwareUpdates", component: SoftwareUpdates };

export default meta;
type Story = StoryObj<typeof SoftwareUpdates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import DefenderPneumaticDevice from "../DefenderPneumaticDevice";

const meta: Meta<typeof DefenderPneumaticDevice> = { title: "Azure/Other/DefenderPneumaticDevice", component: DefenderPneumaticDevice };

export default meta;
type Story = StoryObj<typeof DefenderPneumaticDevice>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

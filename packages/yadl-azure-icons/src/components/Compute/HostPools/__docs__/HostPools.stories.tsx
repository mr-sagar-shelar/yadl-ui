import type { Meta, StoryObj } from "@storybook/react";
import HostPools from "../HostPools";

const meta: Meta<typeof HostPools> = { title: "Azure/Compute/HostPools", component: HostPools };

export default meta;
type Story = StoryObj<typeof HostPools>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

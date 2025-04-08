import type { Meta, StoryObj } from "@storybook/react";
import InstancePools from "../InstancePools";

const meta: Meta<typeof InstancePools> = { title: "Azure/Databases/InstancePools", component: InstancePools };

export default meta;
type Story = StoryObj<typeof InstancePools>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

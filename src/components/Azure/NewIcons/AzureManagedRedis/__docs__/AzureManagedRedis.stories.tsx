import type { Meta, StoryObj } from "@storybook/react";
import AzureManagedRedis from "../AzureManagedRedis";

const meta: Meta<typeof AzureManagedRedis> = { title: "Azure/NewIcons/AzureManagedRedis", component: AzureManagedRedis };

export default meta;
type Story = StoryObj<typeof AzureManagedRedis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

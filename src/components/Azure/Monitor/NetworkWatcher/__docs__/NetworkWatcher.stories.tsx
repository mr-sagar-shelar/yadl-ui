import type { Meta, StoryObj } from "@storybook/react";
import NetworkWatcher from "../NetworkWatcher";

const meta: Meta<typeof NetworkWatcher> = { title: "Azure/Monitor/NetworkWatcher", component: NetworkWatcher };

export default meta;
type Story = StoryObj<typeof NetworkWatcher>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

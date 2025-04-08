import type { Meta, StoryObj } from "@storybook/react";
import AzureServiceBus from "../AzureServiceBus";

const meta: Meta<typeof AzureServiceBus> = { title: "Azure/Integration/AzureServiceBus", component: AzureServiceBus };

export default meta;
type Story = StoryObj<typeof AzureServiceBus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

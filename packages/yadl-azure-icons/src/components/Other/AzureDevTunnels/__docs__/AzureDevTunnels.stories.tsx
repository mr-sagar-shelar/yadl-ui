import type { Meta, StoryObj } from "@storybook/react";
import AzureDevTunnels from "../AzureDevTunnels";

const meta: Meta<typeof AzureDevTunnels> = { title: "Azure/Other/AzureDevTunnels", component: AzureDevTunnels };

export default meta;
type Story = StoryObj<typeof AzureDevTunnels>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

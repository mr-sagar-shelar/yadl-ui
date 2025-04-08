import type { Meta, StoryObj } from "@storybook/react";
import AzureVirtualDesktop from "../AzureVirtualDesktop";

const meta: Meta<typeof AzureVirtualDesktop> = { title: "Azure/Other/AzureVirtualDesktop", component: AzureVirtualDesktop };

export default meta;
type Story = StoryObj<typeof AzureVirtualDesktop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

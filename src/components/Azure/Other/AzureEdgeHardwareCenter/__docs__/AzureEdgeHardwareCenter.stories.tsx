import type { Meta, StoryObj } from "@storybook/react";
import AzureEdgeHardwareCenter from "../AzureEdgeHardwareCenter";

const meta: Meta<typeof AzureEdgeHardwareCenter> = { title: "Azure/Other/AzureEdgeHardwareCenter", component: AzureEdgeHardwareCenter };

export default meta;
type Story = StoryObj<typeof AzureEdgeHardwareCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

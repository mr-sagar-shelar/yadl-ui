import type { Meta, StoryObj } from "@storybook/react";
import AzureSpringApps from "../AzureSpringApps";

const meta: Meta<typeof AzureSpringApps> = { title: "Azure/Web/AzureSpringApps", component: AzureSpringApps };

export default meta;
type Story = StoryObj<typeof AzureSpringApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

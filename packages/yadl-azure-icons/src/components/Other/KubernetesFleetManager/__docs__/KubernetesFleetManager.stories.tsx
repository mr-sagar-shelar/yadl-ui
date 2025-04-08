import type { Meta, StoryObj } from "@storybook/react";
import KubernetesFleetManager from "../KubernetesFleetManager";

const meta: Meta<typeof KubernetesFleetManager> = { title: "Azure/Other/KubernetesFleetManager", component: KubernetesFleetManager };

export default meta;
type Story = StoryObj<typeof KubernetesFleetManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

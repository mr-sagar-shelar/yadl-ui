import type { Meta, StoryObj } from "@storybook/react";
import KubernetesServices from "../KubernetesServices";

const meta: Meta<typeof KubernetesServices> = { title: "Azure/Compute/KubernetesServices", component: KubernetesServices };

export default meta;
type Story = StoryObj<typeof KubernetesServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

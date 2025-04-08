import type { Meta, StoryObj } from "@storybook/react";
import ContainerInstances from "../ContainerInstances";

const meta: Meta<typeof ContainerInstances> = { title: "Azure/Compute/ContainerInstances", component: ContainerInstances };

export default meta;
type Story = StoryObj<typeof ContainerInstances>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

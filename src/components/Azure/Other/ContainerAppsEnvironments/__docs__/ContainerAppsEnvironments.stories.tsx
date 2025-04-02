import type { Meta, StoryObj } from "@storybook/react";
import ContainerAppsEnvironments from "../ContainerAppsEnvironments";

const meta: Meta<typeof ContainerAppsEnvironments> = { title: "Azure/Other/ContainerAppsEnvironments", component: ContainerAppsEnvironments };

export default meta;
type Story = StoryObj<typeof ContainerAppsEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

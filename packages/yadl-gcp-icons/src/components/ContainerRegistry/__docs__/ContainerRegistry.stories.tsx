import type { Meta, StoryObj } from "@storybook/react";
import ContainerRegistry from "../ContainerRegistry";

const meta: Meta<typeof ContainerRegistry> = { title: "GCP/ContainerRegistry", component: ContainerRegistry };

export default meta;
type Story = StoryObj<typeof ContainerRegistry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CloudDeploymentManager from "../CloudDeploymentManager";

const meta: Meta<typeof CloudDeploymentManager> = { title: "GCP/CloudDeploymentManager", component: CloudDeploymentManager };

export default meta;
type Story = StoryObj<typeof CloudDeploymentManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

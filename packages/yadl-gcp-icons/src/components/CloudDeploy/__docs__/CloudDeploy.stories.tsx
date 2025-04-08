import type { Meta, StoryObj } from "@storybook/react";
import CloudDeploy from "../CloudDeploy";

const meta: Meta<typeof CloudDeploy> = { title: "GCP/CloudDeploy", component: CloudDeploy };

export default meta;
type Story = StoryObj<typeof CloudDeploy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

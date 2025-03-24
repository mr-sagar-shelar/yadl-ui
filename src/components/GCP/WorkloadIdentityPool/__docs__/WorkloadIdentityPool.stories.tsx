import type { Meta, StoryObj } from "@storybook/react";
import WorkloadIdentityPool from "../WorkloadIdentityPool";

const meta: Meta<typeof WorkloadIdentityPool> = { title: "GCP/WorkloadIdentityPool", component: WorkloadIdentityPool };

export default meta;
type Story = StoryObj<typeof WorkloadIdentityPool>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

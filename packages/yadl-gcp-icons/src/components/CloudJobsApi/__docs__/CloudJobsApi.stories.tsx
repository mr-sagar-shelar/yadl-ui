import type { Meta, StoryObj } from "@storybook/react";
import CloudJobsApi from "../CloudJobsApi";

const meta: Meta<typeof CloudJobsApi> = { title: "GCP/CloudJobsApi", component: CloudJobsApi };

export default meta;
type Story = StoryObj<typeof CloudJobsApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import StreamAnalyticsJobs from "../StreamAnalyticsJobs";

const meta: Meta<typeof StreamAnalyticsJobs> = { title: "Azure/Analytics/StreamAnalyticsJobs", component: StreamAnalyticsJobs };

export default meta;
type Story = StoryObj<typeof StreamAnalyticsJobs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

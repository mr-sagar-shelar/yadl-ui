import type { Meta, StoryObj } from "@storybook/react";
import CloudScheduler from "../CloudScheduler";

const meta: Meta<typeof CloudScheduler> = { title: "GCP/CloudScheduler", component: CloudScheduler };

export default meta;
type Story = StoryObj<typeof CloudScheduler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

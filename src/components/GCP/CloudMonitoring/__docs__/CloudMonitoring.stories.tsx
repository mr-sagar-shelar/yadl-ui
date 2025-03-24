import type { Meta, StoryObj } from "@storybook/react";
import CloudMonitoring from "../CloudMonitoring";

const meta: Meta<typeof CloudMonitoring> = { title: "GCP/CloudMonitoring", component: CloudMonitoring };

export default meta;
type Story = StoryObj<typeof CloudMonitoring>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

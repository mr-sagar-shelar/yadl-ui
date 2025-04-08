import type { Meta, StoryObj } from "@storybook/react";
import AssuredWorkloads from "../AssuredWorkloads";

const meta: Meta<typeof AssuredWorkloads> = { title: "GCP/AssuredWorkloads", component: AssuredWorkloads };

export default meta;
type Story = StoryObj<typeof AssuredWorkloads>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

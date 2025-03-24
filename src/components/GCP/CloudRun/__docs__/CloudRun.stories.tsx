import type { Meta, StoryObj } from "@storybook/react";
import CloudRun from "../CloudRun";

const meta: Meta<typeof CloudRun> = { title: "GCP/CloudRun", component: CloudRun };

export default meta;
type Story = StoryObj<typeof CloudRun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

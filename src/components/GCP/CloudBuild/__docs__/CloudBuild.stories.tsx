import type { Meta, StoryObj } from "@storybook/react";
import CloudBuild from "../CloudBuild";

const meta: Meta<typeof CloudBuild> = { title: "GCP/CloudBuild", component: CloudBuild };

export default meta;
type Story = StoryObj<typeof CloudBuild>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

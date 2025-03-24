import type { Meta, StoryObj } from "@storybook/react";
import CloudOps from "../CloudOps";

const meta: Meta<typeof CloudOps> = { title: "GCP/CloudOps", component: CloudOps };

export default meta;
type Story = StoryObj<typeof CloudOps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

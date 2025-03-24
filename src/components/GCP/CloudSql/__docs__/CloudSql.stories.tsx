import type { Meta, StoryObj } from "@storybook/react";
import CloudSql from "../CloudSql";

const meta: Meta<typeof CloudSql> = { title: "GCP/CloudSql", component: CloudSql };

export default meta;
type Story = StoryObj<typeof CloudSql>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

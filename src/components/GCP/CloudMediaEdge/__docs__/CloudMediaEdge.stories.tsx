import type { Meta, StoryObj } from "@storybook/react";
import CloudMediaEdge from "../CloudMediaEdge";

const meta: Meta<typeof CloudMediaEdge> = { title: "GCP/CloudMediaEdge", component: CloudMediaEdge };

export default meta;
type Story = StoryObj<typeof CloudMediaEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

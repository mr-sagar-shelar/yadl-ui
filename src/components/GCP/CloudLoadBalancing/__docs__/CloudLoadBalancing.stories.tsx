import type { Meta, StoryObj } from "@storybook/react";
import CloudLoadBalancing from "../CloudLoadBalancing";

const meta: Meta<typeof CloudLoadBalancing> = { title: "GCP/CloudLoadBalancing", component: CloudLoadBalancing };

export default meta;
type Story = StoryObj<typeof CloudLoadBalancing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CloudVpn from "../CloudVpn";

const meta: Meta<typeof CloudVpn> = { title: "GCP/CloudVpn", component: CloudVpn };

export default meta;
type Story = StoryObj<typeof CloudVpn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

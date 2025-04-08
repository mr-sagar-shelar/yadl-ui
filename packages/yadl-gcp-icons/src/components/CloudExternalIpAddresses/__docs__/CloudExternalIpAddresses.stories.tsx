import type { Meta, StoryObj } from "@storybook/react";
import CloudExternalIpAddresses from "../CloudExternalIpAddresses";

const meta: Meta<typeof CloudExternalIpAddresses> = { title: "GCP/CloudExternalIpAddresses", component: CloudExternalIpAddresses };

export default meta;
type Story = StoryObj<typeof CloudExternalIpAddresses>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CloudDns from "../CloudDns";

const meta: Meta<typeof CloudDns> = { title: "GCP/CloudDns", component: CloudDns };

export default meta;
type Story = StoryObj<typeof CloudDns>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

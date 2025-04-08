import type { Meta, StoryObj } from "@storybook/react";
import CloudDomains from "../CloudDomains";

const meta: Meta<typeof CloudDomains> = { title: "GCP/CloudDomains", component: CloudDomains };

export default meta;
type Story = StoryObj<typeof CloudDomains>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

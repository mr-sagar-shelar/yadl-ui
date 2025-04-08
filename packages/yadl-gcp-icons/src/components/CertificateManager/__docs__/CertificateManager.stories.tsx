import type { Meta, StoryObj } from "@storybook/react";
import CertificateManager from "../CertificateManager";

const meta: Meta<typeof CertificateManager> = { title: "GCP/CertificateManager", component: CertificateManager };

export default meta;
type Story = StoryObj<typeof CertificateManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CertificateAuthorityService from "../CertificateAuthorityService";

const meta: Meta<typeof CertificateAuthorityService> = { title: "GCP/CertificateAuthorityService", component: CertificateAuthorityService };

export default meta;
type Story = StoryObj<typeof CertificateAuthorityService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

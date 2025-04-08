import type { Meta, StoryObj } from "@storybook/react";
import PrivateCertificateAuthority from "../PrivateCertificateAuthority";

const meta: Meta<typeof PrivateCertificateAuthority> = { title: "AWS/SecurityIdentityCompliance/PrivateCertificateAuthority", component: PrivateCertificateAuthority };

export default meta;
type Story = StoryObj<typeof PrivateCertificateAuthority>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

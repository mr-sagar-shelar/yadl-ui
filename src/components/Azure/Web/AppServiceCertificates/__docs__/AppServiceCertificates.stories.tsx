import type { Meta, StoryObj } from "@storybook/react";
import AppServiceCertificates from "../AppServiceCertificates";

const meta: Meta<typeof AppServiceCertificates> = { title: "Azure/Web/AppServiceCertificates", component: AppServiceCertificates };

export default meta;
type Story = StoryObj<typeof AppServiceCertificates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

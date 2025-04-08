import type { Meta, StoryObj } from "@storybook/react";
import NetworkSecurity from "../NetworkSecurity";

const meta: Meta<typeof NetworkSecurity> = { title: "GCP/NetworkSecurity", component: NetworkSecurity };

export default meta;
type Story = StoryObj<typeof NetworkSecurity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

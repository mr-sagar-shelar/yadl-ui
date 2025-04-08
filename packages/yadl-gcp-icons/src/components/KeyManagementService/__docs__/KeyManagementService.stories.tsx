import type { Meta, StoryObj } from "@storybook/react";
import KeyManagementService from "../KeyManagementService";

const meta: Meta<typeof KeyManagementService> = { title: "GCP/KeyManagementService", component: KeyManagementService };

export default meta;
type Story = StoryObj<typeof KeyManagementService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

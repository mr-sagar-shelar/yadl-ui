import type { Meta, StoryObj } from "@storybook/react";
import SecretManager from "../SecretManager";

const meta: Meta<typeof SecretManager> = { title: "GCP/SecretManager", component: SecretManager };

export default meta;
type Story = StoryObj<typeof SecretManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

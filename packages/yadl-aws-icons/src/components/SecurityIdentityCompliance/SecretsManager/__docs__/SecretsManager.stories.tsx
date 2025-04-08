import type { Meta, StoryObj } from "@storybook/react";
import SecretsManager from "../SecretsManager";

const meta: Meta<typeof SecretsManager> = { title: "AWS/SecurityIdentityCompliance/SecretsManager", component: SecretsManager };

export default meta;
type Story = StoryObj<typeof SecretsManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

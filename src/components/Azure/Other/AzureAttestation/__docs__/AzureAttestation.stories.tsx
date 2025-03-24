import type { Meta, StoryObj } from "@storybook/react";
import AzureAttestation from "../AzureAttestation";

const meta: Meta<typeof AzureAttestation> = { title: "Azure/Other/AzureAttestation", component: AzureAttestation };

export default meta;
type Story = StoryObj<typeof AzureAttestation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

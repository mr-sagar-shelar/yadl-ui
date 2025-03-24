import type { Meta, StoryObj } from "@storybook/react";
import VerifiableCredentials from "../VerifiableCredentials";

const meta: Meta<typeof VerifiableCredentials> = { title: "Azure/Identity/VerifiableCredentials", component: VerifiableCredentials };

export default meta;
type Story = StoryObj<typeof VerifiableCredentials>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

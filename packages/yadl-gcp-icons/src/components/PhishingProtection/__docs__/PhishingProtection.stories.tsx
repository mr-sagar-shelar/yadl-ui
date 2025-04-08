import type { Meta, StoryObj } from "@storybook/react";
import PhishingProtection from "../PhishingProtection";

const meta: Meta<typeof PhishingProtection> = { title: "GCP/PhishingProtection", component: PhishingProtection };

export default meta;
type Story = StoryObj<typeof PhishingProtection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import PremiumNetworkTier from "../PremiumNetworkTier";

const meta: Meta<typeof PremiumNetworkTier> = { title: "GCP/PremiumNetworkTier", component: PremiumNetworkTier };

export default meta;
type Story = StoryObj<typeof PremiumNetworkTier>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

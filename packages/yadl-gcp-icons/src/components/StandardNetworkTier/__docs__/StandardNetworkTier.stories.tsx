import type { Meta, StoryObj } from "@storybook/react";
import StandardNetworkTier from "../StandardNetworkTier";

const meta: Meta<typeof StandardNetworkTier> = { title: "GCP/StandardNetworkTier", component: StandardNetworkTier };

export default meta;
type Story = StoryObj<typeof StandardNetworkTier>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

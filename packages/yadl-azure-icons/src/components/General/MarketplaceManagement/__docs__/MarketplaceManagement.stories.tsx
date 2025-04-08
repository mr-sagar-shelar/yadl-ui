import type { Meta, StoryObj } from "@storybook/react";
import MarketplaceManagement from "../MarketplaceManagement";

const meta: Meta<typeof MarketplaceManagement> = { title: "Azure/General/MarketplaceManagement", component: MarketplaceManagement };

export default meta;
type Story = StoryObj<typeof MarketplaceManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

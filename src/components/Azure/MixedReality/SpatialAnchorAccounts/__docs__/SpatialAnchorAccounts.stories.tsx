import type { Meta, StoryObj } from "@storybook/react";
import SpatialAnchorAccounts from "../SpatialAnchorAccounts";

const meta: Meta<typeof SpatialAnchorAccounts> = { title: "Azure/MixedReality/SpatialAnchorAccounts", component: SpatialAnchorAccounts };

export default meta;
type Story = StoryObj<typeof SpatialAnchorAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

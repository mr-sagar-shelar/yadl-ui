import type { Meta, StoryObj } from "@storybook/react";
import ProximityPlacementGroups from "../ProximityPlacementGroups";

const meta: Meta<typeof ProximityPlacementGroups> = { title: "Azure/Networking/ProximityPlacementGroups", component: ProximityPlacementGroups };

export default meta;
type Story = StoryObj<typeof ProximityPlacementGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

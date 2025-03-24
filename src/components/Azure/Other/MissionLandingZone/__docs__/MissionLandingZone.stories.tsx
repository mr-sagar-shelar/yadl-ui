import type { Meta, StoryObj } from "@storybook/react";
import MissionLandingZone from "../MissionLandingZone";

const meta: Meta<typeof MissionLandingZone> = { title: "Azure/Other/MissionLandingZone", component: MissionLandingZone };

export default meta;
type Story = StoryObj<typeof MissionLandingZone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

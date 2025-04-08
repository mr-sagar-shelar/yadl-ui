import type { Meta, StoryObj } from "@storybook/react";
import TrafficManagerProfiles from "../TrafficManagerProfiles";

const meta: Meta<typeof TrafficManagerProfiles> = { title: "Azure/Networking/TrafficManagerProfiles", component: TrafficManagerProfiles };

export default meta;
type Story = StoryObj<typeof TrafficManagerProfiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

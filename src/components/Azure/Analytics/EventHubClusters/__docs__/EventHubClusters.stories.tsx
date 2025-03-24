import type { Meta, StoryObj } from "@storybook/react";
import EventHubClusters from "../EventHubClusters";

const meta: Meta<typeof EventHubClusters> = { title: "Azure/Analytics/EventHubClusters", component: EventHubClusters };

export default meta;
type Story = StoryObj<typeof EventHubClusters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

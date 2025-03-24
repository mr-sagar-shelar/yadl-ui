import type { Meta, StoryObj } from "@storybook/react";
import VirtualClusters from "../VirtualClusters";

const meta: Meta<typeof VirtualClusters> = { title: "Azure/Databases/VirtualClusters", component: VirtualClusters };

export default meta;
type Story = StoryObj<typeof VirtualClusters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

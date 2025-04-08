import type { Meta, StoryObj } from "@storybook/react";
import ServiceFabricClusters from "../ServiceFabricClusters";

const meta: Meta<typeof ServiceFabricClusters> = { title: "Azure/Compute/ServiceFabricClusters", component: ServiceFabricClusters };

export default meta;
type Story = StoryObj<typeof ServiceFabricClusters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

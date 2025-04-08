import type { Meta, StoryObj } from "@storybook/react";
import Server_clusterServerCluster from "../Server_clusterServerCluster";

const meta: Meta<typeof Server_clusterServerCluster> = { title: "unDraw/Server_clusterServerCluster", component: Server_clusterServerCluster };

export default meta;
type Story = StoryObj<typeof Server_clusterServerCluster>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

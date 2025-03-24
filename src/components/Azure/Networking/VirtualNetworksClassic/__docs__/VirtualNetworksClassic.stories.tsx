import type { Meta, StoryObj } from "@storybook/react";
import VirtualNetworksClassic from "../VirtualNetworksClassic";

const meta: Meta<typeof VirtualNetworksClassic> = { title: "Azure/Networking/VirtualNetworksClassic", component: VirtualNetworksClassic };

export default meta;
type Story = StoryObj<typeof VirtualNetworksClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

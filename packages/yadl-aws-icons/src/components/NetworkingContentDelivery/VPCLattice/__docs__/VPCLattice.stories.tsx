import type { Meta, StoryObj } from "@storybook/react";
import VPCLattice from "../VPCLattice";

const meta: Meta<typeof VPCLattice> = { title: "AWS/NetworkingContentDelivery/VPCLattice", component: VPCLattice };

export default meta;
type Story = StoryObj<typeof VPCLattice>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import BlockchainApplications from "../BlockchainApplications";

const meta: Meta<typeof BlockchainApplications> = { title: "Azure/Blockchain/BlockchainApplications", component: BlockchainApplications };

export default meta;
type Story = StoryObj<typeof BlockchainApplications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

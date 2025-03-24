import type { Meta, StoryObj } from "@storybook/react";
import DiskEncryptionSets from "../DiskEncryptionSets";

const meta: Meta<typeof DiskEncryptionSets> = { title: "Azure/Compute/DiskEncryptionSets", component: DiskEncryptionSets };

export default meta;
type Story = StoryObj<typeof DiskEncryptionSets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

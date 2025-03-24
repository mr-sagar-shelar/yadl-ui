import type { Meta, StoryObj } from "@storybook/react";
import HDIAKSCluster from "../HDIAKSCluster";

const meta: Meta<typeof HDIAKSCluster> = { title: "Azure/Other/HDIAKSCluster", component: HDIAKSCluster };

export default meta;
type Story = StoryObj<typeof HDIAKSCluster>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

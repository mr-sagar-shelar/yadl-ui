import type { Meta, StoryObj } from "@storybook/react";
import SupplyChain from "../SupplyChain";

const meta: Meta<typeof SupplyChain> = { title: "AWS/BusinessApplications/SupplyChain", component: SupplyChain };

export default meta;
type Story = StoryObj<typeof SupplyChain>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

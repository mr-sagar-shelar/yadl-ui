import type { Meta, StoryObj } from "@storybook/react";
import OpenSupplyChainPlatform from "../OpenSupplyChainPlatform";

const meta: Meta<typeof OpenSupplyChainPlatform> = { title: "Azure/Other/OpenSupplyChainPlatform", component: OpenSupplyChainPlatform };

export default meta;
type Story = StoryObj<typeof OpenSupplyChainPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AssetInventory from "../AssetInventory";

const meta: Meta<typeof AssetInventory> = { title: "GCP/AssetInventory", component: AssetInventory };

export default meta;
type Story = StoryObj<typeof AssetInventory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import CloudAssetInventory from "../CloudAssetInventory";

const meta: Meta<typeof CloudAssetInventory> = { title: "GCP/CloudAssetInventory", component: CloudAssetInventory };

export default meta;
type Story = StoryObj<typeof CloudAssetInventory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

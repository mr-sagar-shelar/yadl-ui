import type { Meta, StoryObj } from "@storybook/react";
import StorageExplorer from "../StorageExplorer";

const meta: Meta<typeof StorageExplorer> = { title: "Azure/Storage/StorageExplorer", component: StorageExplorer };

export default meta;
type Story = StoryObj<typeof StorageExplorer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

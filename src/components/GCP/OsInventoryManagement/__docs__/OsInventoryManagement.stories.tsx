import type { Meta, StoryObj } from "@storybook/react";
import OsInventoryManagement from "../OsInventoryManagement";

const meta: Meta<typeof OsInventoryManagement> = { title: "GCP/OsInventoryManagement", component: OsInventoryManagement };

export default meta;
type Story = StoryObj<typeof OsInventoryManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

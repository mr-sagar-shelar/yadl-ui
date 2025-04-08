import type { Meta, StoryObj } from "@storybook/react";
import StorageSyncServices from "../StorageSyncServices";

const meta: Meta<typeof StorageSyncServices> = { title: "Azure/Storage/StorageSyncServices", component: StorageSyncServices };

export default meta;
type Story = StoryObj<typeof StorageSyncServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

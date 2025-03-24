import type { Meta, StoryObj } from "@storybook/react";
import StorageActions from "../StorageActions";

const meta: Meta<typeof StorageActions> = { title: "Azure/Storage/StorageActions", component: StorageActions };

export default meta;
type Story = StoryObj<typeof StorageActions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

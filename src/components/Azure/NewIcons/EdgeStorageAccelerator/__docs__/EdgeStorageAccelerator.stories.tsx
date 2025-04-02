import type { Meta, StoryObj } from "@storybook/react";
import EdgeStorageAccelerator from "../EdgeStorageAccelerator";

const meta: Meta<typeof EdgeStorageAccelerator> = { title: "Azure/NewIcons/EdgeStorageAccelerator", component: EdgeStorageAccelerator };

export default meta;
type Story = StoryObj<typeof EdgeStorageAccelerator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

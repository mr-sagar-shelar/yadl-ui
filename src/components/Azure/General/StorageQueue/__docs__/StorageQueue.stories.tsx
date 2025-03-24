import type { Meta, StoryObj } from "@storybook/react";
import StorageQueue from "../StorageQueue";

const meta: Meta<typeof StorageQueue> = { title: "Azure/General/StorageQueue", component: StorageQueue };

export default meta;
type Story = StoryObj<typeof StorageQueue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
